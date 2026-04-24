import { createRoot } from 'react-dom/client'
import './app/styles/global.scss'
import { App } from '@/app/App'
import { Provider } from 'react-redux'
import { store } from '@/app/models/store'
import { queryClient } from '@/app/providers/query-client/query-client'
import { QueryClientProvider } from '@tanstack/react-query'

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    </Provider>,
)
