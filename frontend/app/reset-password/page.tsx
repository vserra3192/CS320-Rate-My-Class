'use client'

import Link from 'next/link'
import { SubmitEvent, useState } from 'react'
import { createClient } from '@/lib/supabase/client'

export default function ResetPasswordPage() {
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [busy, setBusy] = useState(false)
  const [complete, setComplete] = useState(false)
  const [error, setError] = useState('')

  async function submit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault(); setError('')
    if (password !== confirm) { setError('Your passwords do not match.'); return }
    setBusy(true)
    try {
      const { error } = await createClient().auth.updateUser({ password })
      if (error) throw error
      setComplete(true)
    } catch (err) { setError(err instanceof Error ? err.message : 'Unable to update password. Open a fresh reset link and try again.') }
    finally { setBusy(false) }
  }

  return <main className="auth-shell"><section className="auth-card compact-card">
    <Link href="/auth" className="back-link">← Back to sign in</Link>
    <div className="brand-mark" aria-hidden="true">◎</div>
    <p className="eyebrow">ACCOUNT RECOVERY</p><h1>Set a new password</h1>
    <p className="subheading">Choose a strong password you haven’t used before.</p>
    {complete ? <div className="notice success" role="status"><strong>Password updated.</strong><br />Your password has been changed successfully. You can now sign in with your new password.<p><Link href="/auth">Return to sign in →</Link></p></div> : <form className="auth-form" onSubmit={submit}>
      <label>New password<input type="password" autoComplete="new-password" minLength={8} value={password} onChange={e => setPassword(e.target.value)} placeholder="At least 8 characters" required /></label>
      <label>Confirm new password<input type="password" autoComplete="new-password" minLength={8} value={confirm} onChange={e => setConfirm(e.target.value)} placeholder="Enter your password again" required /></label>
      {error && <p className="notice error" role="alert">{error}</p>}
      <button className="primary-button" type="submit" disabled={busy}>{busy ? 'Updating…' : 'Update password'} <span>→</span></button>
    </form>}
  </section><p className="page-footer">Thoughtfully made for your next chapter.</p></main>
}
