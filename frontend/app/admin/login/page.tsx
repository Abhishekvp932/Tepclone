'use client'

import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { api } from '@/service/api'

export default function AdminLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('admin@tapclone.com')
  const [password, setPassword] = useState('Admin@123')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')
    setLoading(true)

    try {
      const { data } = await api.post('/api/auth/login', { email, password })
      localStorage.setItem('adminToken', data.token)
      router.push('/admin')
    } catch {
      setError('Invalid admin email or password.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-dark text-white flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative w-full max-w-md border border-dark-border bg-dark-card p-6 md:p-8">
        <Link href="/" className="text-primary text-xs uppercase tracking-[0.25em]">
          Back to website
        </Link>
        <h1 className="mt-6 text-3xl font-bold">Admin Login</h1>
        <p className="mt-2 text-sm text-gray-400">
          Sign in to manage services used by the website carousel.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <label className="block">
            <span className="text-xs uppercase tracking-wider text-gray-400">Email</span>
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              className="mt-2 w-full border border-dark-border bg-dark px-4 py-3 text-sm outline-none focus:border-primary"
              required
            />
          </label>

          <label className="block">
            <span className="text-xs uppercase tracking-wider text-gray-400">Password</span>
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              className="mt-2 w-full border border-dark-border bg-dark px-4 py-3 text-sm outline-none focus:border-primary"
              required
            />
          </label>

          {error && <p className="text-sm text-red-400">{error}</p>}

          <button type="submit" disabled={loading} className="btn-primary w-full justify-center disabled:opacity-60">
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
      </div>
    </main>
  )
}
