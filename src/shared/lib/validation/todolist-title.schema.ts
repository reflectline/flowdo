import { z } from 'zod'

export const validateTitleSchema = z
  .string()
  .trim()
  .min(1, 'Title cannot be empty')
  .max(100, 'Maximum of 100 characters')
  .transform((v) => v.replace(/\s+/g, ' '))