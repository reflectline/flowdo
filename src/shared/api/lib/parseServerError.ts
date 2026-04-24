
import type {AxiosResponse} from 'axios'
import type { ApiError, BaseResponse } from '@/shared/api/types'


export const parseServerError = <T>(res: AxiosResponse<BaseResponse<T>>): ApiError => {
    return {
        message: res.data.messages?.[0] ?? 'Server API error',
        status: res.status,
    }
}