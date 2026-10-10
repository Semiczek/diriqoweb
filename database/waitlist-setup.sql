-- Deployment setup, not yet applied to a database.
-- Run only in the selected Diriqo Supabase project after review.
begin;
create table public.diriqo_waitlist (
 email text primary key check (email = lower(btrim(email)) and char_length(email) between 5 and 254),
 industry text check (industry in ('services','retail','hospitality','manufacturing','other')),
 employees text check (employees in ('1','2-10','11-50','51-200','201+')),
 interest text not null check (interest in ('diriqo','diripos','both')),
 locale text not null check (locale in ('cs','en','de','pl','sk','hu')),
 news_consent boolean not null default false,
 news_consent_at timestamptz,
 news_consent_version text,
 privacy_version text not null,
 created_at timestamptz not null default now(),
 expires_at timestamptz not null default now() + interval '12 months',
 check ((news_consent and news_consent_at is not null and news_consent_version is not null)
     or (not news_consent and news_consent_at is null and news_consent_version is null))
);
create index diriqo_waitlist_expiry_idx on public.diriqo_waitlist (expires_at);
create table public.diriqo_waitlist_limits (
 ip_hash text not null check (ip_hash ~ '^[a-f0-9]{64}$'),
 hour_start timestamptz not null,
 attempts integer not null check (attempts between 1 and 6),
 primary key (ip_hash, hour_start)
);
create index diriqo_waitlist_limits_expiry_idx on public.diriqo_waitlist_limits(hour_start);
alter table public.diriqo_waitlist enable row level security;
alter table public.diriqo_waitlist_limits enable row level security;
revoke all on public.diriqo_waitlist, public.diriqo_waitlist_limits from public, anon, authenticated;
grant select, insert, delete on public.diriqo_waitlist to service_role;
grant select, insert, update, delete on public.diriqo_waitlist_limits to service_role;
create function public.diriqo_register_interest(
 p_email text, p_industry text, p_employees text, p_interest text,
 p_news_consent boolean, p_locale text, p_ip_hash text,
 p_privacy_version text, p_consent_version text
) returns text language plpgsql security invoker set search_path = '' as $$
declare attempt_count integer;
begin
 if p_email is null or p_email <> lower(btrim(p_email)) or
    p_email !~ '^[^[:space:]@]+@[^[:space:]@]+[.][^[:space:]@]+$' or
    char_length(p_email) > 254 or p_news_consent is null or
    p_privacy_version is distinct from '2026-10-10' or
    p_consent_version is distinct from 'product-news-2026-10-10' then
  raise exception 'Invalid registration' using errcode = '22023';
 end if;
 delete from public.diriqo_waitlist_limits where hour_start < now() - interval '24 hours';
 delete from public.diriqo_waitlist where expires_at < now();
 insert into public.diriqo_waitlist_limits (ip_hash, hour_start, attempts)
 values (p_ip_hash, date_trunc('hour', now()), 1)
 on conflict (ip_hash, hour_start) do update
 set attempts = least(public.diriqo_waitlist_limits.attempts + 1, 6)
 returning attempts into attempt_count;
 if attempt_count > 5 then return 'rate_limited'; end if;
 insert into public.diriqo_waitlist
 (email, industry, employees, interest, locale, news_consent, news_consent_at,
  news_consent_version, privacy_version)
 values (p_email, p_industry, p_employees, p_interest, p_locale, p_news_consent,
  case when p_news_consent then now() else null end,
  case when p_news_consent then p_consent_version else null end, p_privacy_version)
 on conflict (email) do nothing;
 -- Do not overwrite existing preferences through an unauthenticated form.
 -- Return the same result for stored duplicates without exposing contact existence.
 return 'saved';
end;
$$;
revoke all on function public.diriqo_register_interest(text,text,text,text,boolean,text,text,text,text) from public, anon, authenticated;
grant execute on function public.diriqo_register_interest(text,text,text,text,boolean,text,text,text,text) to service_role;
commit;
-- Required daily maintenance in the selected database or hosting job:
-- delete from public.diriqo_waitlist_limits where hour_start < now() - interval '24 hours';
-- delete from public.diriqo_waitlist where expires_at < now();
