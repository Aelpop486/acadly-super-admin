import React from 'react'
import ThemeToggle from './ThemeToggle'
import { FiChevronDown, FiMenu, FiSettings } from 'react-icons/fi'
import { useLocation, useNavigate } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'

interface TopNavProps {
  onOpenMobile?: () => void
}

const TopNav: React.FC<TopNavProps> = ({ onOpenMobile }) => {
  const [profileOpen, setProfileOpen] = React.useState(false)
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { t } = useLanguage()

  const goTo = (path: string) => {
    setProfileOpen(false)
    navigate(path)
  }

  const title =
    pathname === '/users'
      ? t('nav.users')
      : pathname === '/centers'
        ? t('nav.centers')
        : pathname === '/analytics'
          ? t('nav.analytics')
          : pathname === '/settings'
            ? t('nav.settings')
            : t('nav.dashboard')

  return (
    <header className="w-full bg-white border-b border-gray-200 dark:bg-slate-800 dark:border-[#0f1724]">
      <div className="container-max flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <button className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-[#0b1220]" onClick={onOpenMobile}>
            <FiMenu className="text-xl" />
          </button>
          <h1 className="text-xl font-bold text-slate-800 dark:text-white">{title}</h1>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:block">
            <input
              placeholder={t('top.search')}
              className="px-3 py-1 rounded-md bg-gray-100 border border-transparent text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-[#071226] dark:border-[#0f1724] dark:text-white"
            />
          </div>
          <div className="relative">
            <button
              type="button"
              onClick={() => setProfileOpen((open) => !open)}
              className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-2 py-1 text-sm text-slate-700 shadow-sm hover:bg-slate-50 dark:border-[#0f1724] dark:bg-[#071226] dark:text-gray-200 dark:hover:bg-slate-700"
              aria-expanded={profileOpen}
              aria-haspopup="menu"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-xs font-semibold text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-300">
                SA
              </span>
              <FiChevronDown className={`text-base text-gray-500 transition dark:text-gray-400 ${profileOpen ? 'rotate-180' : ''}`} />
            </button>

            {profileOpen && (
              <div
                role="menu"
                className="absolute end-0 z-50 mt-2 w-56 overflow-hidden rounded-lg border border-slate-100 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-800"
              >
                <div className="border-b border-slate-100 px-4 py-3 dark:border-slate-700">
                  <p className="text-sm font-bold text-slate-900 dark:text-white">{t('top.superAdmin')}</p>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">admin@acadly.com</p>
                </div>
                <button
                  type="button"
                  onClick={() => goTo('/settings')}
                  className="flex w-full items-center gap-2 px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-700"
                >
                  <FiSettings /> {t('top.accountSettings')}
                </button>
              </div>
            )}
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

export default TopNav
