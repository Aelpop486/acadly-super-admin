import React, { useEffect, useState } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'

const ThemeToggle: React.FC = () => {
  const [dark, setDark] = useState<boolean>(() => {
    try {
      const storedTheme = localStorage.getItem('theme')

      if (storedTheme) return storedTheme === 'dark'

      return window.matchMedia('(prefers-color-scheme: dark)').matches
    } catch {
      return false
    }
  })

  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
      root.style.colorScheme = 'dark'
    } else {
      root.classList.remove('dark')
      root.style.colorScheme = 'light'
    }

    try {
      localStorage.setItem('theme', dark ? 'dark' : 'light')
    } catch {
      // Ignore storage failures so the toggle still works for the current session.
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
