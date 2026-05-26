import React, { useEffect, useState } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'

const ThemeToggle: React.FC = () => {
  const [dark, setDark] = useState<boolean>(() => {
    try {
      return localStorage.getItem('theme') === 'dark'
    } catch {
      return false
    }
  })

  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setDark((s) => !s)}
      className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-[#0b1220]"
    >
      {dark ? <FiSun className="text-lg" /> : <FiMoon className="text-lg" />}
    </button>
  )
}

export default ThemeToggle
