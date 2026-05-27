import React from 'react'
import { useLanguage } from '../i18n/LanguageContext'

interface UserAccount {
  id: number
  name: string
  email: string
  systemRole: 'Super Admin' | 'Center Manager' | 'Instructor'
  dateJoined: string
}

type UserFilter = 'All' | 'Super Admins' | 'Managers' | 'Instructors'

const users: UserAccount[] = [
  { id: 1, name: 'Salma Adel', email: 'salma.adel@acadly.com', systemRole: 'Super Admin', dateJoined: 'Jan 12, 2026' },
  { id: 2, name: 'Mona Hassan', email: 'mona.hassan@cairohub.edu', systemRole: 'Center Manager', dateJoined: 'Feb 03, 2026' },
  { id: 3, name: 'Karim Nabil', email: 'karim.nabil@alexcenter.edu', systemRole: 'Center Manager', dateJoined: 'Feb 18, 2026' },
  { id: 4, name: 'Omar Fathy', email: 'omar.fathy@acadly.com', systemRole: 'Instructor', dateJoined: 'Mar 09, 2026' },
  { id: 5, name: 'Nour Samir', email: 'nour.samir@acadly.com', systemRole: 'Instructor', dateJoined: 'Apr 22, 2026' },
  { id: 6, name: 'Youssef Amin', email: 'youssef.amin@acadly.com', systemRole: 'Super Admin', dateJoined: 'May 04, 2026' },
]

const filters: UserFilter[] = ['All', 'Super Admins', 'Managers', 'Instructors']
const filterLabelKeys: Record<UserFilter, 'users.all' | 'users.superAdmins' | 'users.managers' | 'users.instructors'> = {
  All: 'users.all',
  'Super Admins': 'users.superAdmins',
  Managers: 'users.managers',
  Instructors: 'users.instructors',
}
const roleLabelKeys: Record<UserAccount['systemRole'], 'role.superAdmin' | 'role.centerManager' | 'role.instructor'> = {
  'Super Admin': 'role.superAdmin',
  'Center Manager': 'role.centerManager',
  Instructor: 'role.instructor',
}

const roleBadgeClasses: Record<UserAccount['systemRole'], string> = {
  'Super Admin': 'bg-purple-50 text-purple-700 dark:bg-purple-500/15 dark:text-purple-300',
  'Center Manager': 'bg-indigo-50 text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-300',
  Instructor: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300',
}

const Users: React.FC = () => {
  const { t } = useLanguage()
  const [activeFilter, setActiveFilter] = React.useState<UserFilter>('All')

  const filteredUsers = users.filter((user) => {
    if (activeFilter === 'All') return true
    if (activeFilter === 'Super Admins') return user.systemRole === 'Super Admin'
    if (activeFilter === 'Managers') return user.systemRole === 'Center Manager'

    return user.systemRole === 'Instructor'
  })

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{t('users.title')}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{t('users.subtitle')}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
              activeFilter === filter
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
            }`}
          >
            {t(filterLabelKeys[filter])}
          </button>
        ))}
      </div>

      <div className="overflow-hidden rounded-lg border border-slate-100 bg-white shadow-sm dark:border-slate-700/50 dark:bg-slate-800">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-100 text-start text-sm dark:divide-slate-700/50">
            <thead className="bg-slate-50 dark:bg-slate-900/40">
              <tr>
                <th className="px-5 py-3 font-semibold text-slate-700 dark:text-slate-300">{t('users.name')}</th>
                <th className="px-5 py-3 font-semibold text-slate-700 dark:text-slate-300">{t('users.email')}</th>
                <th className="px-5 py-3 font-semibold text-slate-700 dark:text-slate-300">{t('users.systemRole')}</th>
                <th className="px-5 py-3 font-semibold text-slate-700 dark:text-slate-300">{t('users.dateJoined')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-slate-50 dark:hover:bg-slate-700/40">
                  <td className="px-5 py-4 font-semibold text-slate-900 dark:text-slate-100">{user.name}</td>
                  <td className="px-5 py-4 text-slate-500 dark:text-slate-400">{user.email}</td>
                  <td className="px-5 py-4">
                    <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-bold ${roleBadgeClasses[user.systemRole]}`}>
                      {t(roleLabelKeys[user.systemRole])}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-slate-500 dark:text-slate-400">{user.dateJoined}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Users
