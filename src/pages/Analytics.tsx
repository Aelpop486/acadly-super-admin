import React from 'react'
import { FiActivity, FiBarChart2, FiClock, FiTrendingUp, FiUsers } from 'react-icons/fi'
import { useLanguage } from '../i18n/LanguageContext'

const summaryCards = [
  {
    labelKey: 'analytics.mau' as const,
    value: '18,420',
    detailKey: 'analytics.vsLastMonth' as const,
    icon: <FiUsers />,
    accent: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-300',
  },
  {
    labelKey: 'analytics.completion' as const,
    value: '76.8%',
    detailKey: 'analytics.improvement' as const,
    icon: <FiActivity />,
    accent: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-300',
  },
  {
    labelKey: 'analytics.growth' as const,
    value: '23.4%',
    detailKey: 'analytics.quarterly' as const,
    icon: <FiTrendingUp />,
    accent: 'bg-purple-50 text-purple-600 dark:bg-purple-500/10 dark:text-purple-300',
  },
  {
    labelKey: 'analytics.session' as const,
    value: '42m',
    detailKey: 'analytics.perLearner' as const,
    icon: <FiClock />,
    accent: 'bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-300',
  },
]

const enrollmentDistribution = [
  { center: 'Cairo Hub', centerAr: 'مركز القاهرة', city: 'Cairo', cityAr: 'القاهرة', share: 45, students: '11,030', bar: 'bg-indigo-600 dark:bg-indigo-400' },
  { center: 'Alex Learning Center', centerAr: 'مركز الإسكندرية التعليمي', city: 'Alexandria', cityAr: 'الإسكندرية', share: 30, students: '7,360', bar: 'bg-purple-600 dark:bg-purple-400' },
  { center: 'Delta Academy', centerAr: 'أكاديمية الدلتا', city: 'Mansoura', cityAr: 'المنصورة', share: 14, students: '3,435', bar: 'bg-cyan-600 dark:bg-cyan-400' },
  { center: 'Giza Skills Lab', centerAr: 'معمل مهارات الجيزة', city: 'Giza', cityAr: 'الجيزة', share: 8, students: '1,960', bar: 'bg-emerald-600 dark:bg-emerald-400' },
  { center: 'Upper Egypt Campus', centerAr: 'فرع صعيد مصر', city: 'Assiut', cityAr: 'أسيوط', share: 3, students: '735', bar: 'bg-amber-600 dark:bg-amber-400' },
]

const Analytics: React.FC = () => {
  const { t, language } = useLanguage()

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{t('analytics.title')}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{t('analytics.subtitle')}</p>
      </div>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {summaryCards.map((card) => (
          <div
            key={card.labelKey}
            className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm dark:border-[#0f1724] dark:bg-[#071226]"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{t(card.labelKey)}</p>
                <p className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">{card.value}</p>
              </div>
              <span className={`flex h-11 w-11 items-center justify-center rounded-full text-xl ${card.accent}`}>{card.icon}</span>
            </div>
            <p className="mt-4 text-sm font-medium text-emerald-600 dark:text-emerald-400">{t(card.detailKey)}</p>
          </div>
        ))}
      </section>

      <section className="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-[#0f1724] dark:bg-[#071226]">
        <div className="flex flex-col gap-3 border-b border-gray-100 px-5 py-4 dark:border-[#0f1724] sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-base font-semibold text-slate-900 dark:text-white">{t('analytics.enrollment')}</h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{t('analytics.enrollmentSubtitle')}</p>
          </div>
          <div className="flex items-center gap-2 rounded-md bg-gray-50 px-3 py-2 text-sm font-medium text-gray-600 dark:bg-[#0b1320] dark:text-gray-300">
            <FiBarChart2 className="text-base" />
            24,520 {t('analytics.students')}
          </div>
        </div>

        <div className="divide-y divide-gray-100 dark:divide-[#0f1724]">
          {enrollmentDistribution.map((item) => (
            <div key={item.center} className="grid gap-3 px-5 py-4 lg:grid-cols-[220px_1fr_96px] lg:items-center">
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">{language === 'ar' ? item.cityAr : item.city}</p>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{language === 'ar' ? item.centerAr : item.center}</p>
              </div>

              <div className="min-w-0">
                <div className="h-3 overflow-hidden rounded-full bg-gray-100 dark:bg-[#0b1320]">
                  <div className={`h-full rounded-full ${item.bar}`} style={{ width: `${item.share}%` }} />
                </div>
                <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                  {item.students} {t('analytics.students')}
                </p>
              </div>

              <p className="text-start text-sm font-bold text-slate-900 dark:text-white lg:text-end">{item.share}%</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Analytics
