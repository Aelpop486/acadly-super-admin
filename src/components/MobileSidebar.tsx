import React from 'react'
import { FiHome, FiUsers, FiMapPin, FiBarChart2, FiSettings, FiLogOut } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../auth/AuthProvider'

interface MobileSidebarProps {
  open: boolean
  onClose: () => void
}

const items = [
  { name: 'Dashboard', to: '/' , icon: <FiHome />},
  { name: 'Users', to: '/users', icon: <FiUsers /> },
  { name: 'Centers', to: '/centers', icon: <FiMapPin /> },
  { name: 'Analytics', to: '/analytics', icon: <FiBarChart2 /> },
  { name: 'Settings', to: '/settings', icon: <FiSettings /> },
]

const MobileSidebar: React.FC<MobileSidebarProps> = ({ open, onClose }) => {
  const { logout } = useAuth()
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
      <div className="absolute left-0 top-0 bottom-0 w-72 bg-white dark:bg-[#071226] border-r border-gray-200 dark:border-[#0f1724]">
        <div className="h-16 flex items-center px-4">Admin</div>
        <nav className="px-2 py-4 space-y-1">
          {items.map((it) => (
            <Link key={it.name} to={it.to} onClick={onClose} className="group flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-[#0b1320]">
              <span className="mr-3 text-lg text-gray-500 dark:text-gray-400">{it.icon}</span>
              <span>{it.name}</span>
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-gray-100 dark:border-[#0f1724]">
          <button type="button" className="flex items-center text-sm text-gray-600 dark:text-gray-300 hover:underline" onClick={handleSignOut}>
            <FiLogOut className="mr-2" /> Sign out
          </button>
        </div>
      </div>
    </div>
  )
}

export default MobileSidebar
