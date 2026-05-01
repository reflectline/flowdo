import { z } from 'zod'

export const createTodolistSchema = z.object({
  title: z
    .string()
    .min(1, 'Title is required')
    .max(100, 'Title is too long')
    .trim(),
})

export type CreateTodolistInputType = z.infer<typeof createTodolistSchema>