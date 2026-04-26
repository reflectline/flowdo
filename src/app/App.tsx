import { RouterProvider } from 'react-router-dom'
import { router } from '@/app/providers/router/router'
import { ThemeProvider } from '@/app/providers/theme/themeProvider'
import {ToastContainer} from 'react-toastify'


export const App = () => {

  return (
        <ThemeProvider>
            <RouterProvider router={router} />
            <ToastContainer theme="dark" autoClose={3000} />
        </ThemeProvider>
    )
}


