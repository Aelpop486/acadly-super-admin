# Acadly Super Admin — Project Overview

This project is a React + TypeScript + Vite admin dashboard scaffold for the Acadly platform.

Core implemented parts (minimal working):

- Layouts: `src/layouts/DashboardLayout.tsx`
- Components: `src/components/*` (Sidebar, TopNav, ThemeToggle, MobileSidebar)
- Pages: `src/pages/*` (Login, Dashboard, Users, Centers, Analytics, Settings)
- Firebase init: `src/firebase/firebase.ts`
- Firebase helpers: `src/firebase/authHelpers.ts`
- Firestore services: `src/services/firestoreService.ts`
- Notifications: `src/services/notifications.ts`
- Hooks: `src/hooks/useAuthState.tsx`
- Charts: `src/charts/SimpleLineChart.tsx`

Quick notes:
- The app uses a lightweight `AuthProvider` (mock localStorage) to manage protected routes; `src/firebase/authHelpers.ts` provides real Firebase wrappers you can wire into `AuthProvider`.
- Tailwind is configured (see `tailwind.config.cjs` and `postcss.config.cjs`). If styles appear missing, restart the dev server and ensure dependencies are installed (`tailwindcss`, `@tailwindcss/postcss`, `postcss`, `autoprefixer`).

Local env variables (copy `.env.example` → `.env.local` and fill):
- `VITE_FIREBASE_API_KEY`, `VITE_FIREBASE_PROJECT_ID`, etc.

Files to extend next:
- `src/services/*` — add Firestore queries and write operations.
- `src/hooks/*` — add reusable hooks (useUsers, useRealtimeCollection).
- `src/components/*` — polish UI and responsive behaviors.
