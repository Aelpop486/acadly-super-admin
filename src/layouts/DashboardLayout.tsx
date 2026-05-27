import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import TopNav from '../components/TopNav'
import MobileSidebar from '../components/MobileSidebar'

const DashboardLayout: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="min-h-screen flex bg-slate-50 text-gray-900 dark:bg-slate-900 dark:text-gray-100">
      <Sidebar />

      <div className="flex-1 flex flex-col md:ps-64">
        <TopNav onOpenMobile={() => setMobileOpen(true)} />

        <main className="flex-1 container-max py-6">
          <Outlet />
        </main>
      </div>

      <MobileSidebar open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </div>
  )
}

export default DashboardLayout
