import {z} from 'zod'

export const loginSchema = z.object({
    email: z.string().trim().email(),
    password: z.string().min(2, "Please write password"),
    rememberMe: z.boolean().optional(),
    captcha: z.string().optional(),
})


export type LoginInputsType = z.infer<typeof loginSchema>
