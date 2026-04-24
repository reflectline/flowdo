import axios from 'axios'
import type { ApiError } from '@/shared/api/types'

export const parseHttpError = (error?: unknown): ApiError => {
  if (axios.isAxiosError(error)) {
    if (error.response) {
      return {
        message: error.response?.data?.message ?? 'Server error',
        status: error.response.status,
      }
    }

    if (error.request) {
      return {
        message: 'Network error (try use VPN)',
      }
    }

    return {
      message: error.message || 'Request setup error',
    }
  }

  if (error instanceof Error) {
    return {
      message: error.message,
    }
  }

  return {
    message: 'Unknown error',
  }
}
