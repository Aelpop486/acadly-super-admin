import React from 'react'
import { FiActivity, FiDollarSign, FiMapPin, FiServer, FiUsers } from 'react-icons/fi'
import { useLanguage } from '../i18n/LanguageContext'

const stats = [
  {
    labelKey: 'dashboard.totalUsers' as const,
    value: '24,512',
    trend: '+12.4%',
    trendClass: 'text-emerald-600 dark:text-emerald-400',
    icon: <FiUsers />,
    iconClass: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-300',
  },
  {
    labelKey: 'dashboard.activeCenters' as const,
    value: '142',
    trend: '+8.1%',
    trendClass: 'text-emerald-600 dark:text-emerald-400',
    icon: <FiMapPin />,
    iconClass: 'bg-cyan-50 text-cyan-600 dark:bg-cyan-500/10 dark:text-cyan-300',
  },
  {
    labelKey: 'dashboard.totalRevenue' as const,
    value: '$45.2K',
    trend: '+18.7%',
    trendClass: 'text-emerald-600 dark:text-emerald-400',
    icon: <FiDollarSign />,
    iconClass: 'bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-300',
  },
  {
    labelKey: 'dashboard.serverStatus' as const,
    value: '99.9%',
    trend: '-0.1%',
    trendClass: 'text-rose-600 dark:text-rose-400',
    icon: <FiServer />,
    iconClass: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-300',
  },
]

const centers = [
  { name: 'Cairo Hub', nameAr: 'مركز القاهرة', location: 'Nasr City, Cairo', locationAr: 'مدينة نصر، القاهرة', status: 'active', date: 'May 24, 2026', dateAr: '24 مايو 2026' },
  { name: 'Alex Learning Center', nameAr: 'مركز الإسكندرية التعليمي', location: 'Smouha, Alexandria', locationAr: 'سموحة، الإسكندرية', status: 'pending', date: 'May 23, 2026', dateAr: '23 مايو 2026' },
  { name: 'Delta Academy', nameAr: 'أكاديمية الدلتا', location: 'Mansoura', locationAr: 'المنصورة', status: 'active', date: 'May 21, 2026', dateAr: '21 مايو 2026' },
  { name: 'Giza Skills Lab', nameAr: 'معمل مهارات الجيزة', location: 'Dokki, Giza', locationAr: 'الدقي، الجيزة', status: 'pending', date: 'May 20, 2026', dateAr: '20 مايو 2026' },
]

const logs = [
  { actionKey: 'dashboard.logApproved' as const, timeKey: 'time.min12' as const },
  { actionKey: 'dashboard.logInstructor' as const, timeKey: 'time.min34' as const },
  { actionKey: 'dashboard.logRole' as const, timeKey: 'time.hour1' as const },
  { actionKey: 'dashboard.logPayment' as const, timeKey: 'time.hours2' as const },
]

const Dashboard: React.FC = () => {
  const { t, language } = useLanguage()

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{t('dashboard.title')}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{t('dashboard.subtitle')}</p>
      </div>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.labelKey}
            className="relative overflow-hidden rounded-lg border border-gray-200 bg-white p-5 shadow-sm dark:border-[#0f1724] dark:bg-[#071226]"
          >
            <div className={`absolute end-4 top-4 flex h-12 w-12 items-center justify-center rounded-full text-2xl ${stat.iconClass}`}>
              {stat.icon}
            </div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{t(stat.labelKey)}</p>
            <div className="mt-4 flex items-end gap-3">
              <p className="text-3xl font-bold text-slate-900 dark:text-white">{stat.value}</p>
              <p className={`pb-1 text-sm font-semibold ${stat.trendClass}`}>{stat.trend}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="grid grid-cols-1 gap-6 xl:grid-cols-[3fr_2fr]">
        <div className="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-[#0f1724] dark:bg-[#071226]">
          <div className="border-b border-gray-100 px-5 py-4 dark:border-[#0f1724]">
            <h3 className="text-base font-semibold text-slate-900 dark:text-white">{t('dashboard.recentCenters')}</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-100 text-start text-sm dark:divide-[#0f1724]">
              <thead className="bg-gray-50 text-xs uppercase text-gray-500 dark:bg-[#0b1320] dark:text-gray-400">
                <tr>
                  <th className="px-5 py-3 font-semibold">{t('dashboard.centerName')}</th>
                  <th className="px-5 py-3 font-semibold">{t('dashboard.location')}</th>
                  <th className="px-5 py-3 font-semibold">{t('dashboard.status')}</th>
                  <th className="px-5 py-3 font-semibold">{t('dashboard.registrationDate')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-[#0f1724]">
                {centers.map((center) => (
                  <tr key={center.name}>
                    <td className="px-5 py-4 font-medium text-slate-900 dark:text-white">{language === 'ar' ? center.nameAr : center.name}</td>
                    <td className="px-5 py-4 text-gray-600 dark:text-gray-300">{language === 'ar' ? center.locationAr : center.location}</td>
                    <td className="px-5 py-4">
                      <span
                        className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${
                          center.status === 'active'
                            ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300'
                            : 'bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300'
                        }`}
                      >
                        {t(center.status === 'active' ? 'status.active' : 'status.pending')}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-gray-600 dark:text-gray-300">{language === 'ar' ? center.dateAr : center.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm dark:border-[#0f1724] dark:bg-[#071226]">
          <h3 className="text-base font-semibold text-slate-900 dark:text-white">{t('dashboard.systemLogs')}</h3>
          <div className="mt-5 space-y-4">
            {logs.map((log) => (
              <div key={log.actionKey} className="flex gap-3">
                <span className="mt-0.5 flex h-9 w-9 flex-none items-center justify-center rounded-full bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-300">
                  <FiActivity />
                </span>
                <div>
                  <p className="text-sm font-medium text-slate-900 dark:text-white">{t(log.actionKey)}</p>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{t(log.timeKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Dashboard
