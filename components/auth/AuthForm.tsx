'use client'

import { FormEvent, useState } from 'react'

import { createSupabaseBrowserClient } from '@/lib/supabase'
import type { AuthPageCopy, Locale } from '@/lib/marketing/content'

type AuthFormProps = {
  locale: Locale
  mode: 'register' | 'login'
  copy: AuthPageCopy
}

function getAuthRedirectTo(locale: Locale) {
  const next = encodeURIComponent(`/onboarding/company?locale=${locale}`)
  return `${window.location.origin}/auth/callback?locale=${locale}&next=${next}`
}

function getAuthErrorMessage(message: string | undefined, copy: AuthPageCopy['login']) {
  const normalized = (message ?? '').trim().toLowerCase()

  if (normalized.includes('invalid login credentials')) return copy.invalidCredentials
  if (normalized.includes('email') && normalized.includes('invalid')) return copy.invalidEmail

  return message || copy.signInFailed
}

export function AuthForm({ locale, mode, copy }: AuthFormProps) {
  const authCopy = mode === 'register' ? copy.register : copy.login
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [notice, setNotice] = useState<string | null>(null)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    setError(null)
    setNotice(null)

    if (password.length < 8) {
      setError(copy.register.passwordMinLength)
      setLoading(false)
      return
    }

    try {
      const supabase = createSupabaseBrowserClient()

      if (mode === 'register') {
        if (password !== confirmPassword) {
          setError(copy.register.passwordsDoNotMatch)
          setLoading(false)
          return
        }

        const { data, error: signUpError } = await supabase.auth.signUp({
          email: email.trim(),
          password,
          options: {
            emailRedirectTo: getAuthRedirectTo(locale),
          },
        })

        if (signUpError || !data.user) {
          setError(signUpError?.message || copy.register.createAccountFailed)
          setLoading(false)
          return
        }

        if (!data.session) {
          setNotice(copy.register.accountCreatedCheckEmail)
          setLoading(false)
          return
        }

        window.location.assign(`/onboarding/company?locale=${locale}`)
        return
      }

      const { error: signInError } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      })

      if (signInError) {
        setError(getAuthErrorMessage(signInError.message, copy.login))
        setLoading(false)
        return
      }

      window.location.assign(`/auth/continue?locale=${locale}`)
    } catch {
      setError(mode === 'register' ? copy.register.supabaseMissing : copy.login.supabaseMissing)
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <label className="grid gap-2 text-sm font-black text-slate-100">
        {authCopy.email}
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          required
          autoComplete="email"
          className="min-h-12 rounded-lg border border-white/10 bg-white/[0.92] px-4 text-slate-950 outline-none transition focus:border-cyan-300 focus:ring-4 focus:ring-cyan-300/20"
        />
      </label>
      <label className="grid gap-2 text-sm font-black text-slate-100">
        {authCopy.password}
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          required
          minLength={8}
          autoComplete={mode === 'register' ? 'new-password' : 'current-password'}
          className="min-h-12 rounded-lg border border-white/10 bg-white/[0.92] px-4 text-slate-950 outline-none transition focus:border-cyan-300 focus:ring-4 focus:ring-cyan-300/20"
        />
      </label>
      {mode === 'register' ? (
        <label className="grid gap-2 text-sm font-black text-slate-100">
          {copy.register.confirmPassword}
          <input
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            type="password"
            required
            minLength={8}
            autoComplete="new-password"
            className="min-h-12 rounded-lg border border-white/10 bg-white/[0.92] px-4 text-slate-950 outline-none transition focus:border-cyan-300 focus:ring-4 focus:ring-cyan-300/20"
          />
        </label>
      ) : null}

      {error ? (
        <div className="rounded-lg border border-red-300/40 bg-red-500/12 px-4 py-3 text-sm font-bold text-red-100">
          {error}
        </div>
      ) : null}

      {notice ? (
        <div className="rounded-lg border border-emerald-300/40 bg-emerald-400/12 px-4 py-3 text-sm font-bold text-emerald-100">
          {notice}
        </div>
      ) : null}

      <button
        type="submit"
        disabled={loading}
        className="cta-light-sweep mt-2 inline-flex min-h-12 items-center justify-center rounded-lg bg-[linear-gradient(135deg,#8b5cf6_0%,#2563eb_48%,#06b6d4_100%)] px-5 text-base font-black !text-white shadow-lg shadow-blue-500/25 transition hover:-translate-y-0.5 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
      >
        {loading ? authCopy.loadingSubmit : authCopy.submit}
      </button>
    </form>
  )
}
