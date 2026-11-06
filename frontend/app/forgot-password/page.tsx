'use client'

import Link from 'next/link'
import { SubmitEvent, useState } from 'react'
import { createClient } from '@/lib/supabase/client'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [busy, setBusy] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  async function submit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault(); setBusy(true); setError('')
    try {
      const { error } = await createClient().auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/callback?next=/reset-password`,
      })
      if (error) throw error
      setSent(true)
    } catch (err) { setError(err instanceof Error ? err.message : 'Unable to send reset email.') }
    finally { setBusy(false) }
  }

  return <main className="auth-shell"><section className="auth-card compact-card">
    <Link href="/auth" className="back-link">← Back to sign in</Link>
    <div className="brand-mark" aria-hidden="true">◎</div>
    <p className="eyebrow">ACCOUNT RECOVERY</p><h1>Forgot your password?</h1>
    <p className="subheading">It happens. Enter the email address associated with your account and we’ll send you a reset link.</p>
    {sent ? <div className="notice success" role="status"><strong>Check your inbox</strong><br />If an account exists for {email}, you’ll receive a password reset link shortly.</div> : <form className="auth-form" onSubmit={submit}>
      <label>Email address<input type="email" autoComplete="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" required /></label>
      {error && <p className="notice error" role="alert">{error}</p>}
      <button className="primary-button" type="submit" disabled={busy}>{busy ? 'Sending…' : 'Send reset link'} <span>→</span></button>
    </form>}
  </section><p className="page-footer">Thoughtfully made for your next chapter.</p></main>
}
