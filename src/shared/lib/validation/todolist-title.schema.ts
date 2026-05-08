import { z } from 'zod'

export const validateTitleSchema = z
  .string()
  .trim()
  .min(1, 'Title cannot be empty')
  .transform((v) => v.replace(/\s+/g, ' '))