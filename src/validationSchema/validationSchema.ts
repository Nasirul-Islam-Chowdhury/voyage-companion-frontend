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





  
export const step1Schema = z.object({
  firstName: z.string().nonempty("First name is required"),
  lastName: z.string().nonempty("Last name is required"),
});

export const step2Schema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const step3Schema = z.object({
  address: z.string().nonempty("Address is required"),
  city: z.string().nonempty("City is required"),
  postalCode: z.string().nonempty("Postal code is required"),
});

export type Step1FormData = z.infer<typeof step1Schema>;
export type Step2FormData = z.infer<typeof step2Schema>;
export type Step3FormData = z.infer<typeof step3Schema>;

export type FormData = Step1FormData & Step2FormData & Step3FormData;