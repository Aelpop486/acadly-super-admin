import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { FiHome, FiUsers, FiMapPin, FiBarChart2, FiSettings, FiLogOut } from 'react-icons/fi'
import { useAuth } from '../auth/AuthProvider'
import { useLanguage } from '../i18n/LanguageContext'

interface NavItem {
  labelKey: 'nav.dashboard' | 'nav.users' | 'nav.centers' | 'nav.analytics' | 'nav.settings'
  to: string
  icon: React.ReactNode
}

const items: NavItem[] = [
  { labelKey: 'nav.dashboard', to: '/', icon: <FiHome /> },
  { labelKey: 'nav.users', to: '/users', icon: <FiUsers /> },
  { labelKey: 'nav.centers', to: '/centers', icon: <FiMapPin /> },
  { labelKey: 'nav.analytics', to: '/analytics', icon: <FiBarChart2 /> },
  { labelKey: 'nav.settings', to: '/settings', icon: <FiSettings /> },
]

const Sidebar: React.FC = () => {
  const { t } = useLanguage()

  return (
    <aside className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 md:start-0 bg-white dark:bg-[#071226] border-e border-gray-200 dark:border-[#0f1724]">
      <div className="flex-1 flex flex-col min-h-0">
        <div className="flex items-center h-16 px-4 text-lg font-semibold">{t('app.admin')}</div>
        <nav className="flex-1 px-2 py-4 space-y-1">
          {items.map((it) => (
            <NavLink
              key={it.labelKey}
              to={it.to}
              end={it.to === '/'}
              className={({ isActive }) =>
                `group flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                  isActive
                    ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300'
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-[#0b1320]'
                }`
              }
            >
              <span className="me-3 text-lg text-gray-500 dark:text-gray-400">{it.icon}</span>
              <span>{t(it.labelKey)}</span>
            </NavLink>
          ))}
        </nav>
        <div className="p-4 border-t border-gray-100 dark:border-[#0f1724]">
          <SignOutButton />
        </div>
      </div>
    </aside>
  )
}

export default Sidebar

const SignOutButton: React.FC = () => {
  const { logout } = useAuth()
  const { t } = useLanguage()
  const nav = useNavigate()

  const handle = async () => {
    await logout()
    nav('/login')
  }

  return (
    <button onClick={handle} className="flex items-center text-sm text-gray-600 dark:text-gray-300 hover:underline">
      <FiLogOut className="me-2" /> {t('nav.signOut')}
    </button>
  )
}
