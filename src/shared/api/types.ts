
export type BaseResponse<T = unknown> = {
    resultCode: number
    messages: string[],
    data: T
    fieldsErrors?: FieldError[]
}

export type FieldError = {
    error: string
    field: string
}

export type ApiError = {
    status?: number
    message: string
}

export type RequestStatus = 'idle' | 'loading' | 'succeeded' | 'failed'