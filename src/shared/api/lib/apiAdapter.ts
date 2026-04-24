import type { AxiosResponse } from 'axios'
import type { BaseResponse } from '@/shared/api/types'
import {parseServerError} from '@/shared/api/lib/parseServerError.ts';

export type ApiResult<T> = | { data: T } | { error: string; status?: number }

export const adaptResponse = <T>(res: AxiosResponse<BaseResponse<T>>): ApiResult<T> => {
  if (res.data.resultCode === 0) {
    return { data: res.data.data }
  }

  return {
    error: res.data.messages?.[0] ?? 'Unknown error',
    status: res.status,
  }
}