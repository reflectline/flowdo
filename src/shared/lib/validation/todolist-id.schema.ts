import {z} from 'zod'

export const validateTodolistId = z.uuid()