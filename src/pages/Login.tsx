import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { FiAlertCircle, FiLock, FiMail } from 'react-icons/fi'
import { useAuth } from '../auth/AuthProvider'

function getLoginErrorMessage(error: unknown) {
  if (error instanceof Error) {
    if (error.message.includes('super admin')) {
      return error.message
    }
  }

  return 'Unable to sign in. Check your email and password, then try again.'
}

const Login: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const { user, loading, authError, configNotice, login } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (user?.isSuperAdmin) {
      navigate('/', { replace: true })
    }
  }, [navigate, user])

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSubmitting(true)

    try {
      await login(email.trim(), password)
      navigate('/', { replace: true })
    } catch (err) {
      setError(getLoginErrorMessage(err))
    } finally {
      setSubmitting(false)
    }
  }

  if (user?.isSuperAdmin) {
    return <Navigate to="/" replace />
  }

  return (
    <main className="min-h-screen bg-[color:var(--bg)] text-[color:var(--text)]">
      <div className="min-h-screen grid lg:grid-cols-[1.05fr_0.95fr]">
        <section className="hidden lg:flex flex-col justify-between bg-[#101828] text-white px-12 py-10">
          <div className="text-xl font-semibold tracking-tight">Acadly Admin</div>

          <div className="max-w-xl">
            <p className="text-sm font-medium text-indigo-200 mb-4">Super Admin Console</p>
            <h1 className="text-5xl font-semibold leading-tight">
              Manage the platform with a secure admin workspace.
            </h1>
            <p className="mt-6 text-base leading-7 text-slate-300">
              Access is restricted to authenticated Firebase users with the super admin role.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 text-sm text-slate-300">
            <div className="border-t border-white/15 pt-4">Users</div>
            <div className="border-t border-white/15 pt-4">Centers</div>
            <div className="border-t border-white/15 pt-4">Analytics</div>
          </div>
        </section>

        <section className="flex items-center justify-center px-5 py-10 sm:px-8">
          <div className="w-full max-w-md">
            <div className="mb-8 lg:hidden">
              <div className="text-xl font-semibold">Acadly Admin</div>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Super Admin Console</p>
            </div>

            <form
              onSubmit={submit}
              className="bg-[color:var(--card)] border border-gray-200 dark:border-[#172033] shadow-xl shadow-slate-200/60 dark:shadow-black/20 rounded-lg p-6 sm:p-8"
            >
              <div className="mb-7">
                <h2 className="text-2xl font-semibold">Sign in</h2>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  {loading ? 'Checking your current session...' : 'Use your Firebase admin account to continue.'}
                </p>
              </div>

              {(authError || error) && (
                <div className="mb-5 flex gap-3 rounded-md border border-red-200 bg-red-50 px-3 py-3 text-sm text-red-700 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-200">
                  <FiAlertCircle className="mt-0.5 shrink-0" />
                  <span>{authError || error}</span>
                </div>
              )}

              {configNotice && !authError && !error && (
                <div className="mb-5 rounded-md border border-indigo-200 bg-indigo-50 px-3 py-3 text-sm text-indigo-800 dark:border-indigo-900/50 dark:bg-indigo-950/30 dark:text-indigo-200">
                  {configNotice}
                </div>
              )}

              <div className="space-y-4">
                <label className="block">
                  <span className="text-sm font-medium">Email address</span>
                  <span className="mt-2 flex items-center rounded-md border border-gray-300 bg-white px-3 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500/20 dark:border-[#263247] dark:bg-[#0b1220]">
                    <FiMail className="me-2 text-gray-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      autoComplete="email"
                      required
                      className="h-11 w-full bg-transparent text-sm outline-none"
                    />
                  </span>
                </label>

                <label className="block">
                  <span className="text-sm font-medium">Password</span>
                  <span className="mt-2 flex items-center rounded-md border border-gray-300 bg-white px-3 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500/20 dark:border-[#263247] dark:bg-[#0b1220]">
                    <FiLock className="me-2 text-gray-400" />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      autoComplete="current-password"
                      required
                      className="h-11 w-full bg-transparent text-sm outline-none"
                    />
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={!!authError || loading || submitting}
                className="mt-6 flex h-11 w-full items-center justify-center rounded-md bg-indigo-600 px-4 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading || submitting ? 'Please wait...' : 'Sign in'}
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Login
