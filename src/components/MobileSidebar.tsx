import React from 'react'
import { FiHome, FiUsers, FiMapPin, FiBarChart2, FiSettings, FiLogOut } from 'react-icons/fi'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../auth/AuthProvider'
import { useLanguage } from '../i18n/LanguageContext'

interface MobileSidebarProps {
  open: boolean
  onClose: () => void
}

const items = [
  { labelKey: 'nav.dashboard' as const, to: '/' , icon: <FiHome />},
  { labelKey: 'nav.users' as const, to: '/users', icon: <FiUsers /> },
  { labelKey: 'nav.centers' as const, to: '/centers', icon: <FiMapPin /> },
  { labelKey: 'nav.analytics' as const, to: '/analytics', icon: <FiBarChart2 /> },
  { labelKey: 'nav.settings' as const, to: '/settings', icon: <FiSettings /> },
]

const MobileSidebar: React.FC<MobileSidebarProps> = ({ open, onClose }) => {
  const { logout } = useAuth()
  const { t } = useLanguage()
  const navigate = useNavigate()

  const handleSignOut = async () => {
    await logout()
    onClose()
    navigate('/login')
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-40 md:hidden">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="absolute start-0 top-0 bottom-0 w-72 bg-white dark:bg-[#071226] border-e border-gray-200 dark:border-[#0f1724]">
        <div className="h-16 flex items-center px-4">{t('app.admin')}</div>
        <nav className="px-2 py-4 space-y-1">
          {items.map((it) => (
            <NavLink
              key={it.labelKey}
              to={it.to}
              end={it.to === '/'}
              onClick={onClose}
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
          <button type="button" className="flex items-center text-sm text-gray-600 dark:text-gray-300 hover:underline" onClick={handleSignOut}>
            <FiLogOut className="me-2" /> {t('nav.signOut')}
          </button>
        </div>
      </div>
    </div>
  )
}

export default MobileSidebar
