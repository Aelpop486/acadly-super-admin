import React from 'react'
import { type Language, useLanguage } from '../i18n/LanguageContext'

const fieldClass =
  'mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white'

const labelClass = 'text-sm font-semibold text-slate-700 dark:text-slate-300'
const cardClass = 'rounded-lg border border-slate-100 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800'

const Settings: React.FC = () => {
  const { language, setLanguage, t } = useLanguage()
  const [enforce2FA, setEnforce2FA] = React.useState(true)
  const [allowSelfRegistration, setAllowSelfRegistration] = React.useState(false)
  const [timezone, setTimezone] = React.useState('Africa/Cairo')

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{t('settings.title')}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{t('settings.subtitle')}</p>
      </div>

      <section className={cardClass}>
        <div className="border-b border-slate-100 pb-4 dark:border-slate-700">
          <h3 className="text-base font-bold text-slate-900 dark:text-white">{t('settings.platformProfile')}</h3>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-3">
          <label>
            <span className={labelClass}>{t('settings.adminEmail')}</span>
            <input type="email" defaultValue="admin@acadly.com" className={fieldClass} />
          </label>

          <label>
            <span className={labelClass}>{t('settings.webhooks')}</span>
            <input type="url" defaultValue="https://hooks.acadly.com/system-alerts" className={fieldClass} />
          </label>

          <label>
            <span className={labelClass}>{t('settings.platformTitle')}</span>
            <input type="text" defaultValue="Acadly" className={fieldClass} />
          </label>
        </div>
      </section>

      <section className={cardClass}>
        <div className="border-b border-slate-100 pb-4 dark:border-slate-700">
          <h3 className="text-base font-bold text-slate-900 dark:text-white">{t('settings.security')}</h3>
        </div>

        <div className="mt-5 space-y-4">
          <div className="flex items-center justify-between gap-4 rounded-lg border border-slate-100 p-4 dark:border-slate-700">
            <div>
              <p className={labelClass}>{t('settings.enforce2fa')}</p>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{t('settings.enforce2faHelp')}</p>
            </div>
            <button
              type="button"
              onClick={() => setEnforce2FA((value) => !value)}
              className={`relative h-7 w-12 rounded-full transition ${enforce2FA ? 'bg-indigo-600' : 'bg-slate-300 dark:bg-slate-600'}`}
              aria-pressed={enforce2FA}
            >
              <span
                className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition ${
                  enforce2FA ? 'end-1' : 'start-1'
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between gap-4 rounded-lg border border-slate-100 p-4 dark:border-slate-700">
            <div>
              <p className={labelClass}>{t('settings.selfRegistration')}</p>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{t('settings.selfRegistrationHelp')}</p>
            </div>
            <button
              type="button"
              onClick={() => setAllowSelfRegistration((value) => !value)}
              className={`relative h-7 w-12 rounded-full transition ${
                allowSelfRegistration ? 'bg-indigo-600' : 'bg-slate-300 dark:bg-slate-600'
              }`}
              aria-pressed={allowSelfRegistration}
            >
              <span
                className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition ${
                  allowSelfRegistration ? 'end-1' : 'start-1'
                }`}
              />
            </button>
          </div>
        </div>
      </section>

      <section className={cardClass}>
        <div className="border-b border-slate-100 pb-4 dark:border-slate-700">
          <h3 className="text-base font-bold text-slate-900 dark:text-white">{t('settings.localization')}</h3>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
          <label>
            <span className={labelClass}>{t('settings.defaultLanguage')}</span>
            <select value={language} onChange={(event) => setLanguage(event.target.value as Language)} className={fieldClass}>
              <option value="en" className="bg-white text-slate-900 dark:bg-slate-900 dark:text-white">
                {t('settings.english')}
              </option>
              <option value="ar" className="bg-white text-slate-900 dark:bg-slate-900 dark:text-white">
                {t('settings.arabic')}
              </option>
            </select>
          </label>

          <label>
            <span className={labelClass}>{t('settings.timezone')}</span>
            <select value={timezone} onChange={(event) => setTimezone(event.target.value)} className={fieldClass}>
              <option>Africa/Cairo</option>
              <option>UTC</option>
              <option>Europe/London</option>
            </select>
          </label>
        </div>
      </section>

      <div className="flex justify-end">
        <button type="button" className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700">
          {t('settings.save')}
        </button>
      </div>
    </div>
  )
}

export default Settings
