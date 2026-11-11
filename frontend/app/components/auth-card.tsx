'use client'

import Link from 'next/link'
import { SubmitEvent, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useSearchParams } from 'next/navigation'


type Mode = 'signin' | 'signup'

export default function AuthCard() {
  const searchParams = useSearchParams()
  const initialMode: Mode =
    searchParams.get('mode') === 'signup' ? 'signup' : 'signin'

  return <AuthForm key={initialMode} initialMode={initialMode} />
}

function AuthForm({ initialMode }: { initialMode: Mode }) {
  const [mode, setMode] = useState<Mode>(initialMode)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [busy, setBusy] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [fieldErrors, setFieldErrors] = useState<{
    name?: string
    email?: string
    password?: string
  }>({})

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')
setMessage('')

const errors: {
  name?: string
  email?: string
  password?: string
} = {}

if (mode === 'signup' && !name.trim()) {
  errors.name = 'Please enter your full name.'
}

if (!email.trim()) {
  errors.email = 'Please enter your email address.'
} else {
  const emailInput =
    event.currentTarget.querySelector<HTMLInputElement>('input[type="email"]')

  if (emailInput?.validity.typeMismatch) {
      errors.email = 'Please enter a valid email address.'
    }
  }

  if (!password) {
    errors.password = 'Please enter your password.'
  } else if (mode === 'signup' && password.length < 8) {
    errors.password = 'Use at least 8 characters.'
  }

  setFieldErrors(errors)

  if (Object.keys(errors).length > 0) {
    return
  }
    const requestedNext = new URLSearchParams(window.location.search).get('next')
const allowedPaths = ['/', '/ratings', '/ratings/professor']
const redirectTo =
  requestedNext && allowedPaths.includes(requestedNext)
    ? requestedNext
    : '/'
    setBusy(true); setError(''); setMessage('')
    const supabase = createClient()
    try {
      if (mode === 'signup') {
        const { data, error } = await supabase.auth.signUp({
          email, password,
          options: {
            data: { full_name: name },
            emailRedirectTo: `${window.location.origin}/auth/callback?next=${encodeURIComponent(redirectTo)}`,
          },
        })
        if (error) throw error
        setMessage(data.session
          ? 'Your account is ready. You are now signed in.'
          : 'Check your inbox for a confirmation link to finish creating your account.')
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password })
        if (error) throw error
        window.location.assign(redirectTo)
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally { setBusy(false) }
  }

  return (
    <main className="auth-shell">
      <section className="auth-card" aria-labelledby="auth-title">
        <div className="brand-mark" aria-hidden="true">◎</div>
        <p className="eyebrow">YOUR SPACE STARTS HERE</p>
        <h1 id="auth-title">{mode === 'signin' ? 'Welcome back' : 'Create your account'}</h1>
        <p className="subheading">{mode === 'signin' ? 'Sign in to continue where you left off.' : 'A few details and you’ll be on your way.'}</p>

        <div className="auth-tabs" role="tablist" aria-label="Account access">
          <button type="button" role="tab" aria-selected={mode === 'signin'} className={mode === 'signin' ? 'active' : ''} onClick={() => { setMode('signin'); setError(''); setMessage(''); setFieldErrors({}) }}>Sign in</button>
          <button type="button" role="tab" aria-selected={mode === 'signup'} className={mode === 'signup' ? 'active' : ''} onClick={() => { setMode('signup'); setError(''); setMessage(''); setFieldErrors({}) }}>Create account</button>
        </div>

        <form onSubmit={handleSubmit} className="auth-form" noValidate>
          {mode === 'signup' && <label>Full name<input autoComplete="name" value={name} onChange={e => setName(e.target.value)} placeholder="Your name" required /></label>}
          {mode === 'signup' && fieldErrors.name && (
            <p className="text-sm text-red-600" role="alert">
              {fieldErrors.name}
            </p>
          )}
          <label>Email address<input type="email" autoComplete="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" required /></label>
          {fieldErrors.email && (
            <p className="text-sm text-red-600" role="alert">
              {fieldErrors.email}
            </p>
          )}
          <label>Password
            <span className="password-wrap"><input type={showPassword ? 'text' : 'password'} autoComplete={mode === 'signin' ? 'current-password' : 'new-password'} value={password} onChange={e => setPassword(e.target.value)} placeholder="At least 8 characters" minLength={8} required /><button className="show-password" type="button" onClick={() => setShowPassword(!showPassword)}>{showPassword ? 'Hide' : 'Show'}</button></span>
          </label>
          {fieldErrors.password && (
            <p className="text-sm text-red-600" role="alert">
              {fieldErrors.password}
            </p>
          )}
          {mode === 'signin' && <div className="form-meta"><span>Secure access to your account</span><Link href="/forgot-password">Forgot password?</Link></div>}
          {error && <p className="notice error" role="alert">{error}</p>}
          {message && <p className="notice success" role="status">{message}</p>}
          <button className="primary-button" type="submit" disabled={busy}>{busy ? 'Please wait…' : mode === 'signin' ? 'Sign in' : 'Create account'} <span aria-hidden="true">→</span></button>
        </form>
        <p className="legal-note">By continuing, you agree to our <a href="#terms">Terms</a> and <a href="#privacy">Privacy Policy</a>.</p>
      </section>
      <p className="page-footer">Thoughtfully made for your next chapter.</p>
    </main>
  )
}
