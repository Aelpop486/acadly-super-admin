import React from 'react'

export type Language = 'en' | 'ar'

type TranslationKey =
  | 'app.admin'
  | 'nav.dashboard'
  | 'nav.users'
  | 'nav.centers'
  | 'nav.analytics'
  | 'nav.settings'
  | 'nav.signOut'
  | 'top.search'
  | 'top.superAdmin'
  | 'top.profile'
  | 'top.accountSettings'
  | 'top.security'
  | 'dashboard.title'
  | 'dashboard.subtitle'
  | 'dashboard.totalUsers'
  | 'dashboard.activeCenters'
  | 'dashboard.totalRevenue'
  | 'dashboard.serverStatus'
  | 'dashboard.recentCenters'
  | 'dashboard.centerName'
  | 'dashboard.location'
  | 'dashboard.status'
  | 'dashboard.registrationDate'
  | 'dashboard.systemLogs'
  | 'dashboard.logApproved'
  | 'dashboard.logInstructor'
  | 'dashboard.logRole'
  | 'dashboard.logPayment'
  | 'time.min12'
  | 'time.min34'
  | 'time.hour1'
  | 'time.hours2'
  | 'users.title'
  | 'users.subtitle'
  | 'users.all'
  | 'users.superAdmins'
  | 'users.managers'
  | 'users.instructors'
  | 'users.name'
  | 'users.email'
  | 'users.systemRole'
  | 'users.dateJoined'
  | 'role.superAdmin'
  | 'role.centerManager'
  | 'role.instructor'
  | 'centers.title'
  | 'centers.subtitle'
  | 'centers.search'
  | 'centers.add'
  | 'centers.students'
  | 'centers.manager'
  | 'centers.empty'
  | 'status.active'
  | 'status.pending'
  | 'status.suspended'
  | 'analytics.title'
  | 'analytics.subtitle'
  | 'analytics.mau'
  | 'analytics.completion'
  | 'analytics.growth'
  | 'analytics.session'
  | 'analytics.vsLastMonth'
  | 'analytics.improvement'
  | 'analytics.quarterly'
  | 'analytics.perLearner'
  | 'analytics.enrollment'
  | 'analytics.enrollmentSubtitle'
  | 'analytics.students'
  | 'settings.title'
  | 'settings.subtitle'
  | 'settings.platformProfile'
  | 'settings.adminEmail'
  | 'settings.webhooks'
  | 'settings.platformTitle'
  | 'settings.security'
  | 'settings.enforce2fa'
  | 'settings.enforce2faHelp'
  | 'settings.selfRegistration'
  | 'settings.selfRegistrationHelp'
  | 'settings.localization'
  | 'settings.defaultLanguage'
  | 'settings.timezone'
  | 'settings.english'
  | 'settings.arabic'
  | 'settings.save'

const translations: Record<Language, Record<TranslationKey, string>> = {
  en: {
    'app.admin': 'Admin',
    'nav.dashboard': 'Dashboard',
    'nav.users': 'Users',
    'nav.centers': 'Centers',
    'nav.analytics': 'Analytics',
    'nav.settings': 'Settings',
    'nav.signOut': 'Sign out',
    'top.search': 'Search...',
    'top.superAdmin': 'Super Admin',
    'top.profile': 'Profile',
    'top.accountSettings': 'Account Settings',
    'top.security': 'Security',
    'dashboard.title': 'Dashboard',
    'dashboard.subtitle': 'Overview and quick stats.',
    'dashboard.totalUsers': 'Total Users',
    'dashboard.activeCenters': 'Active Centers',
    'dashboard.totalRevenue': 'Total Revenue',
    'dashboard.serverStatus': 'Server Status',
    'dashboard.recentCenters': 'Recent Center Registrations',
    'dashboard.centerName': 'Center Name',
    'dashboard.location': 'Location',
    'dashboard.status': 'Status',
    'dashboard.registrationDate': 'Registration Date',
    'dashboard.systemLogs': 'System Logs',
    'dashboard.logApproved': 'Admin approved Cairo Hub',
    'dashboard.logInstructor': 'New Instructor account verified',
    'dashboard.logRole': 'Security role updated for regional manager',
    'dashboard.logPayment': 'Payment gateway health check completed',
    'time.min12': '12 min ago',
    'time.min34': '34 min ago',
    'time.hour1': '1 hr ago',
    'time.hours2': '2 hrs ago',
    'users.title': 'Users',
    'users.subtitle': 'Manage application users.',
    'users.all': 'All',
    'users.superAdmins': 'Super Admins',
    'users.managers': 'Managers',
    'users.instructors': 'Instructors',
    'users.name': 'Name',
    'users.email': 'Email',
    'users.systemRole': 'System Role',
    'users.dateJoined': 'Date Joined',
    'role.superAdmin': 'Super Admin',
    'role.centerManager': 'Center Manager',
    'role.instructor': 'Instructor',
    'centers.title': 'Centers',
    'centers.subtitle': 'Manage centers and locations.',
    'centers.search': 'Search centers, managers, status...',
    'centers.add': 'Add Center',
    'centers.students': 'students',
    'centers.manager': 'Center Manager',
    'centers.empty': 'No centers match your search.',
    'status.active': 'Active',
    'status.pending': 'Pending',
    'status.suspended': 'Suspended',
    'analytics.title': 'Analytics',
    'analytics.subtitle': 'Reports and charts.',
    'analytics.mau': 'Monthly Active Users',
    'analytics.completion': 'Course Completion Rate',
    'analytics.growth': 'Platform Growth Curve',
    'analytics.session': 'Avg. Session Duration',
    'analytics.vsLastMonth': '+9.6% vs last month',
    'analytics.improvement': '+4.2% improvement',
    'analytics.quarterly': 'quarterly growth rate',
    'analytics.perLearner': '+6m per active learner',
    'analytics.enrollment': 'Enrollment Distribution by Center',
    'analytics.enrollmentSubtitle': 'Top campuses by share of total enrolled students',
    'analytics.students': 'students',
    'settings.title': 'Settings',
    'settings.subtitle': 'Application settings.',
    'settings.platformProfile': 'Platform Profile',
    'settings.adminEmail': 'Admin Contact Email',
    'settings.webhooks': 'System Notification Alert Webhooks',
    'settings.platformTitle': 'Platform Title Name',
    'settings.security': 'Security Configurations',
    'settings.enforce2fa': 'Enforce Two-Factor Authentication (2FA) for Managers',
    'settings.enforce2faHelp': 'Require additional verification for center management accounts.',
    'settings.selfRegistration': 'Allow New Student Self-Registration',
    'settings.selfRegistrationHelp': 'Let learners create accounts before center assignment approval.',
    'settings.localization': 'Localization Toggles',
    'settings.defaultLanguage': 'Default Language',
    'settings.timezone': 'System Timezone',
    'settings.english': 'English',
    'settings.arabic': 'Arabic',
    'settings.save': 'Save Configurations',
  },
  ar: {
    'app.admin': 'الإدارة',
    'nav.dashboard': 'لوحة التحكم',
    'nav.users': 'المستخدمون',
    'nav.centers': 'المراكز',
    'nav.analytics': 'التحليلات',
    'nav.settings': 'الإعدادات',
    'nav.signOut': 'تسجيل الخروج',
    'top.search': 'بحث...',
    'top.superAdmin': 'مدير عام',
    'top.profile': 'الملف الشخصي',
    'top.accountSettings': 'إعدادات الحساب',
    'top.security': 'الأمان',
    'dashboard.title': 'لوحة التحكم',
    'dashboard.subtitle': 'نظرة عامة وإحصاءات سريعة.',
    'dashboard.totalUsers': 'إجمالي المستخدمين',
    'dashboard.activeCenters': 'المراكز النشطة',
    'dashboard.totalRevenue': 'إجمالي الإيرادات',
    'dashboard.serverStatus': 'حالة الخادم',
    'dashboard.recentCenters': 'أحدث تسجيلات المراكز',
    'dashboard.centerName': 'اسم المركز',
    'dashboard.location': 'الموقع',
    'dashboard.status': 'الحالة',
    'dashboard.registrationDate': 'تاريخ التسجيل',
    'dashboard.systemLogs': 'سجل النظام',
    'dashboard.logApproved': 'وافق المدير على مركز القاهرة',
    'dashboard.logInstructor': 'تم توثيق حساب مدرب جديد',
    'dashboard.logRole': 'تم تحديث صلاحيات مدير إقليمي',
    'dashboard.logPayment': 'اكتمل فحص بوابة الدفع',
    'time.min12': 'منذ 12 دقيقة',
    'time.min34': 'منذ 34 دقيقة',
    'time.hour1': 'منذ ساعة',
    'time.hours2': 'منذ ساعتين',
    'users.title': 'المستخدمون',
    'users.subtitle': 'إدارة مستخدمي التطبيق.',
    'users.all': 'الكل',
    'users.superAdmins': 'المديرون العامون',
    'users.managers': 'مديرو المراكز',
    'users.instructors': 'المدربون',
    'users.name': 'الاسم',
    'users.email': 'البريد الإلكتروني',
    'users.systemRole': 'دور النظام',
    'users.dateJoined': 'تاريخ الانضمام',
    'role.superAdmin': 'مدير عام',
    'role.centerManager': 'مدير مركز',
    'role.instructor': 'مدرب',
    'centers.title': 'المراكز',
    'centers.subtitle': 'إدارة المراكز والمواقع.',
    'centers.search': 'ابحث عن المراكز أو المديرين أو الحالة...',
    'centers.add': 'إضافة مركز',
    'centers.students': 'طالب',
    'centers.manager': 'مدير المركز',
    'centers.empty': 'لا توجد مراكز تطابق البحث.',
    'status.active': 'نشط',
    'status.pending': 'قيد الانتظار',
    'status.suspended': 'موقوف',
    'analytics.title': 'التحليلات',
    'analytics.subtitle': 'التقارير والرسوم.',
    'analytics.mau': 'المستخدمون النشطون شهريًا',
    'analytics.completion': 'معدل إكمال الدورات',
    'analytics.growth': 'منحنى نمو المنصة',
    'analytics.session': 'متوسط مدة الجلسة',
    'analytics.vsLastMonth': '+9.6% مقارنة بالشهر الماضي',
    'analytics.improvement': '+4.2% تحسن',
    'analytics.quarterly': 'معدل النمو ربع السنوي',
    'analytics.perLearner': '+6 دقائق لكل متعلم نشط',
    'analytics.enrollment': 'توزيع التسجيل حسب المركز',
    'analytics.enrollmentSubtitle': 'أعلى الفروع حسب حصة الطلاب المسجلين',
    'analytics.students': 'طالب',
    'settings.title': 'الإعدادات',
    'settings.subtitle': 'إعدادات التطبيق.',
    'settings.platformProfile': 'ملف المنصة',
    'settings.adminEmail': 'بريد مسؤول الإدارة',
    'settings.webhooks': 'روابط تنبيهات النظام',
    'settings.platformTitle': 'اسم عنوان المنصة',
    'settings.security': 'إعدادات الأمان',
    'settings.enforce2fa': 'فرض التحقق الثنائي على مديري المراكز',
    'settings.enforce2faHelp': 'طلب تحقق إضافي لحسابات إدارة المراكز.',
    'settings.selfRegistration': 'السماح بتسجيل الطلاب الذاتي',
    'settings.selfRegistrationHelp': 'السماح للطلاب بإنشاء حسابات قبل اعتماد المركز.',
    'settings.localization': 'إعدادات اللغة والمنطقة',
    'settings.defaultLanguage': 'اللغة الافتراضية',
    'settings.timezone': 'المنطقة الزمنية للنظام',
    'settings.english': 'الإنجليزية',
    'settings.arabic': 'العربية',
    'settings.save': 'حفظ الإعدادات',
  },
}

interface LanguageContextValue {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: TranslationKey) => string
  isRtl: boolean
}

const LanguageContext = React.createContext<LanguageContextValue | undefined>(undefined)

export const LanguageProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [language, setLanguageState] = React.useState<Language>(() => {
    try {
      return localStorage.getItem('platformLanguage') === 'ar' ? 'ar' : 'en'
    } catch {
      return 'en'
    }
  })

  const setLanguage = React.useCallback((nextLanguage: Language) => {
    setLanguageState(nextLanguage)
  }, [])

  React.useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'

    try {
      localStorage.setItem('platformLanguage', language)
    } catch {
      // Keep language switching usable even when storage is unavailable.
    }
  }, [language])

  const value = React.useMemo(
    () => ({
      language,
      setLanguage,
      t: (key: TranslationKey) => translations[language][key],
      isRtl: language === 'ar',
    }),
    [language, setLanguage],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => {
  const context = React.useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage must be used inside LanguageProvider')
  }

  return context
}
