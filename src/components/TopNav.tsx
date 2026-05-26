import React from 'react'
import ThemeToggle from './ThemeToggle'
import { FiMenu } from 'react-icons/fi'

interface TopNavProps {
  onOpenMobile?: () => void
}

const TopNav: React.FC<TopNavProps> = ({ onOpenMobile }) => {
  return (
    <header className="w-full bg-transparent border-b border-gray-200 dark:border-[#0f1724]">
      <div className="container-max flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <button className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-[#0b1220]" onClick={onOpenMobile}>
            <FiMenu className="text-xl" />
          </button>
          <h1 className="text-lg font-semibold">Dashboard</h1>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:block">
            <input
              placeholder="Search..."
              className="px-3 py-1 rounded-md bg-gray-100 border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm dark:bg-[#071226] dark:border-[#0f1724]"
            />
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

export default TopNav
