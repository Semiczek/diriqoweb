import type { IndustriesSeoContent } from '@/lib/marketing/content'

type IndustrySeoSectionProps = {
  content?: IndustriesSeoContent
}

export function IndustrySeoSection({ content }: IndustrySeoSectionProps) {
  if (!content) {
    return null
  }

  return (
    <section className="bg-slate-50 pb-16 sm:pb-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200/80 bg-white/90 p-5 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur sm:p-7 lg:p-8">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-wide text-blue-700">Obory a profese</p>
            <h2 className="mt-3 text-3xl font-black tracking-normal text-slate-950 sm:text-4xl">{content.title}</h2>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">{content.intro}</p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {content.groups.map((group) => (
              <article
                key={group.title}
                className="premium-card-shine rounded-3xl border border-slate-200/80 bg-slate-50/70 p-5 shadow-[0_14px_38px_rgba(15,23,42,0.05)] transition duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-white hover:shadow-[0_22px_54px_rgba(37,99,235,0.1)] sm:p-6"
              >
                <h3 className="text-xl font-black text-slate-950">{group.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{group.intro}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.professions.map((profession) => (
                    <span
                      key={profession}
                      className="rounded-full border border-blue-100 bg-white px-3 py-1.5 text-xs font-extrabold text-slate-700 shadow-sm shadow-slate-900/5 transition duration-200 hover:-translate-y-0.5 hover:border-cyan-200 hover:bg-cyan-50 hover:text-slate-950 sm:text-sm"
                    >
                      {profession}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-blue-100 bg-[linear-gradient(135deg,rgba(239,246,255,0.95),rgba(236,254,255,0.75))] p-5 text-base leading-7 text-slate-700 shadow-inner shadow-white/80 sm:p-6">
            {content.seoText}
          </div>
        </div>

        <div className="mt-8 rounded-[2rem] border border-slate-800 bg-slate-950 p-5 text-white shadow-[0_24px_70px_rgba(15,23,42,0.16)] sm:p-7 lg:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-wide text-cyan-200">Problémy v provozu</p>
              <h2 className="mt-3 text-3xl font-black tracking-normal sm:text-4xl">{content.problemsTitle}</h2>
              <p className="mt-4 text-base leading-7 text-slate-300">{content.problemsIntro}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {content.problems.map((problem) => (
                <div
                  key={problem}
                  className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-bold leading-6 text-slate-100 shadow-[0_14px_34px_rgba(2,6,23,0.2)] transition duration-200 hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-white/[0.09]"
                >
                  {problem}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
