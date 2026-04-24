import {AUTH_TOKEN} from '@/shared/config/constants'

export const tokenStorage  = {
    get: () => localStorage.getItem(AUTH_TOKEN),
    set: (token: string) => localStorage.setItem(AUTH_TOKEN, token),
    remove: () => localStorage.removeItem(AUTH_TOKEN),
}

