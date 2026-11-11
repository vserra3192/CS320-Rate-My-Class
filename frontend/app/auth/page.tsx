import { Suspense } from 'react'
import AuthCard from '@/app/components/auth-card'

export default function AuthPage() {
  return (
    <Suspense fallback={<p>Loading account form…</p>}>
      <AuthCard />
    </Suspense>
  )
}