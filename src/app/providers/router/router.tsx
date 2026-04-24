import { createBrowserRouter, Navigate } from 'react-router-dom'
import { PublicLayout } from '@/app/layouts/PublicLayout/PublicLayout'
import { LoginPage } from '@/pages/login/LoginPage'
import { DashboardPage } from '@/pages/dashboard/DashboardPage'
import { TodolistPage } from '@/pages/todolist/TodolistPage'
import { ErrorPage } from '@/pages/error/ErrorPage'
import { WelcomePage } from '@/pages/welcome/WelcomePage'
import { ProtectedRoute } from '@/app/guards/ProtectedRoute'
import { AppLayout } from '@/app/layouts/AppLayout/AppLayout'
import { PublicRoute } from '@/app/guards/PublicRoute'

export const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [{ index: true, element: <WelcomePage /> }],
  },

  {
    element: <PublicRoute />,
    children: [{ path: 'login', element: <LoginPage /> }],
  },
  {
    element: <ProtectedRoute />, // isAuth Outlet или LOGIN
    children: [
      {
        path: 'dashboard',
        element: <AppLayout />,

        children: [
          { index: true, element: <Navigate to="all-lists" replace /> },
          { path: ':filter', element: <DashboardPage /> },
          { path: ':filter/:todoName', element: <TodolistPage /> },
        ],
      },
    ],
  },

  { path: '*', element: <ErrorPage /> },
])


