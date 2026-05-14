import { z } from 'zod'

export const createTaskSchema = z.object({
  title: z
    .string()
    .min(1, 'Title is required')
    .max(100, 'Title is too long')
    .trim(),
})

export type CreateTaskInputType = z.infer<typeof createTaskSchema>