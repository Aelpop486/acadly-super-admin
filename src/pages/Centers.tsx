import React from 'react'
import { FiMapPin, FiPlus, FiSearch, FiUsers } from 'react-icons/fi'
import { useLanguage } from '../i18n/LanguageContext'

interface Center {
  id: number
  name: string
  nameAr: string
  campusCode: string
  location: string
  locationAr: string
  managerName: string
  managerNameAr: string
  studentCount: number
  status: 'Active' | 'Pending' | 'Suspended'
}

const centers: Center[] = [
  {
    id: 1,
    name: 'Cairo Hub',
    nameAr: 'مركز القاهرة',
    campusCode: 'CAI-001',
    location: 'Nasr City, Cairo',
    locationAr: 'مدينة نصر، القاهرة',
    managerName: 'Mona Hassan',
    managerNameAr: 'منى حسن',
    studentCount: 1240,
    status: 'Active',
  },
  {
    id: 2,
    name: 'Alex Learning Center',
    nameAr: 'مركز الإسكندرية التعليمي',
    campusCode: 'ALX-014',
    location: 'Smouha, Alexandria',
    locationAr: 'سموحة، الإسكندرية',
    managerName: 'Karim Nabil',
    managerNameAr: 'كريم نبيل',
    studentCount: 860,
    status: 'Pending',
  },
  {
    id: 3,
    name: 'Delta Academy',
    nameAr: 'أكاديمية الدلتا',
    campusCode: 'MAN-022',
    location: 'Mansoura',
    locationAr: 'المنصورة',
    managerName: 'Sara Adel',
    managerNameAr: 'سارة عادل',
    studentCount: 710,
    status: 'Active',
  },
  {
    id: 4,
    name: 'Giza Skills Lab',
    nameAr: 'معمل مهارات الجيزة',
    campusCode: 'GIZ-009',
    location: 'Dokki, Giza',
    locationAr: 'الدقي، الجيزة',
    managerName: 'Omar Fathy',
    managerNameAr: 'عمر فتحي',
    studentCount: 430,
    status: 'Suspended',
  },
  {
    id: 5,
    name: 'Upper Egypt Campus',
    nameAr: 'فرع صعيد مصر',
    campusCode: 'AST-031',
    location: 'Assiut',
    locationAr: 'أسيوط',
    managerName: 'Nour Samir',
    managerNameAr: 'نور سمير',
    studentCount: 390,
    status: 'Pending',
  },
  {
    id: 6,
    name: 'Canal Training Center',
    nameAr: 'مركز القناة التدريبي',
    campusCode: 'ISL-018',
    location: 'Ismailia',
    locationAr: 'الإسماعيلية',
    managerName: 'Youssef Amin',
    managerNameAr: 'يوسف أمين',
    studentCount: 525,
    status: 'Active',
  },
]

const statusClasses: Record<Center['status'], string> = {
  Active: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300',
  Pending: 'bg-amber-50 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300',
  Suspended: 'bg-red-50 text-red-700 dark:bg-red-500/15 dark:text-red-300',
}

const Centers: React.FC = () => {
  const { t, language } = useLanguage()
  const [search, setSearch] = React.useState('')

  const filteredCenters = centers.filter((center) => {
    const query = search.toLowerCase().trim()

    return (
      center.name.toLowerCase().includes(query) ||
      center.nameAr.toLowerCase().includes(query) ||
      center.campusCode.toLowerCase().includes(query) ||
      center.location.toLowerCase().includes(query) ||
      center.locationAr.toLowerCase().includes(query) ||
      center.managerName.toLowerCase().includes(query) ||
      center.managerNameAr.toLowerCase().includes(query) ||
      center.status.toLowerCase().includes(query)
    )
  })

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{t('centers.title')}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{t('centers.subtitle')}</p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-md">
          <FiSearch className="pointer-events-none absolute start-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder={t('centers.search')}
            className="w-full rounded-lg border border-transparent bg-slate-100 py-2.5 pe-3 ps-10 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-indigo-300 focus:ring-2 focus:ring-indigo-500/20 dark:bg-slate-700 dark:text-white"
          />
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700"
        >
          <FiPlus />
          {t('centers.add')}
        </button>
      </div>

      <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filteredCenters.map((center) => (
          <article
            key={center.id}
            className="rounded-lg border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-700/50 dark:bg-slate-800"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">{center.campusCode}</p>
                <h3 className="mt-2 text-lg font-bold text-slate-900 dark:text-white">{language === 'ar' ? center.nameAr : center.name}</h3>
              </div>
              <span className={`rounded-full px-2.5 py-1 text-xs font-bold ${statusClasses[center.status]}`}>
                {t(center.status === 'Active' ? 'status.active' : center.status === 'Pending' ? 'status.pending' : 'status.suspended')}
              </span>
            </div>

            <div className="mt-5 space-y-3">
              <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 dark:bg-slate-700 dark:text-slate-300">
                  <FiMapPin />
                </span>
                <span>{language === 'ar' ? center.locationAr : center.location}</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 dark:bg-slate-700 dark:text-slate-300">
                  <FiUsers />
                </span>
                <span>
                  {center.studentCount.toLocaleString()} {t('centers.students')}
                </span>
              </div>
            </div>

            <div className="mt-5 border-t border-slate-100 pt-4 dark:border-slate-700/50">
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400">{t('centers.manager')}</p>
              <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
                {language === 'ar' ? center.managerNameAr : center.managerName}
              </p>
            </div>
          </article>
        ))}
      </section>

      {filteredCenters.length === 0 && (
        <div className="rounded-lg border border-slate-100 bg-white px-5 py-10 text-center dark:border-slate-700/50 dark:bg-slate-800">
          <p className="text-sm font-medium text-slate-600 dark:text-slate-300">{t('centers.empty')}</p>
        </div>
      )}
    </div>
  )
}

export default Centers
