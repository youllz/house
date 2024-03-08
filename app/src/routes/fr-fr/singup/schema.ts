import { z } from "zod";
 
export const formSchema = z.object({
  name: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  phone: z.string().min(8).max(8),
  email: z.string().email(),
  password: z.string().min(8),
  passwordConfirm: z.string().min(8)
});
 
export type FormSchema = typeof formSchema;