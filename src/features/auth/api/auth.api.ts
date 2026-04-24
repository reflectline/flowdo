import { instance } from '@/shared/api/instance'
import type { LoginInputsType } from '@/features/auth/lib/login.schema'
import type { BaseResponse } from '@/shared/api/types'

export const authApi = {
  login(body: LoginInputsType) {
    return instance.post<BaseResponse<{ userId: number; token: string }>>('auth/login', body)
  },

  me() {
    return instance.get<BaseResponse<{ id: number; email: string; login: string }>>('auth/me')
  },

  logout() {
    return instance.delete<BaseResponse>('auth/login')
  },
}
