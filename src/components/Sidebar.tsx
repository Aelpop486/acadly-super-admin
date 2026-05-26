import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { FiHome, FiUsers, FiMapPin, FiBarChart2, FiSettings, FiLogOut } from 'react-icons/fi'
import { useAuth } from '../auth/AuthProvider'

interface NavItem {
  name: string
  to: string
  icon: React.ReactNode
}

const items: NavItem[] = [
  { name: 'Dashboard', to: '/', icon: <FiHome /> },
  { name: 'Users', to: '/users', icon: <FiUsers /> },
  { name: 'Centers', to: '/centers', icon: <FiMapPin /> },
  { name: 'Analytics', to: '/analytics', icon: <FiBarChart2 /> },
  { name: 'Settings', to: '/settings', icon: <FiSettings /> },
]

const Sidebar: React.FC = () => {
  return (
    <aside className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 bg-white dark:bg-[#071226] border-r border-gray-200 dark:border-[#0f1724]">
      <div className="flex-1 flex flex-col min-h-0">
        <div className="flex items-center h-16 px-4 text-lg font-semibold">Admin</div>
        <nav className="flex-1 px-2 py-4 space-y-1">
          {items.map((it) => (
            <NavLink
              key={it.name}
              to={it.to}
              end={it.to === '/'}
              className={({ isActive }) =>
                `group flex items-center px-3 py-2 text-sm font-medium rounded-md ${isActive ? 'bg-gray-100 dark:bg-[#0b1320]' : 'text-gray-700 dark:text-gray-200'}`
              }
            >
              <span className="mr-3 text-lg text-gray-500 dark:text-gray-400">{it.icon}</span>
              <span>{it.name}</span>
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
  const nav = useNavigate()

  const handle = async () => {
    await logout()
    nav('/login')
  }

  return (
    <button onClick={handle} className="flex items-center text-sm text-gray-600 dark:text-gray-300 hover:underline">
      <FiLogOut className="mr-2" /> Sign out
    </button>
  )
}
