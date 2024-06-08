import { z } from "zod";

export const loginValidationSchema = z.object({
    email: z.string().email("Please enter a valid email address!"),
    password: z.string().min(6, "Must be at least 6 characters"),
  });

  export const registerValidationSchema = z.object({
    email: z.string().email("Please enter a valid email address!"),
    password: z.string().min(6, "Must be at least 6 characters"),
    confirmPassword: z.string(),
    username: z.string(),
  });





export   const passwordChangeValidationSchema = z.object({
  currentPassword: z.string({required_error:"password is required"}),
  newPassword: z.string({required_error:"password is required"}),
  confirmPassword: z.string({required_error:"password is required"}),

});