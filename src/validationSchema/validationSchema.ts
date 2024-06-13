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

export const passwordChangeValidationSchema = z.object({
  oldPassword: z.string({ required_error: "password is required" }),
  newPassword: z.string({ required_error: "password is required" }),
  confirmPassword: z.string({ required_error: "password is required" }),
});

export const createTripValidationSchema = z.object({
  destination: z.string({ required_error: "Destination is required" }),
  budget: z.string({ required_error: "budget is required" }),
  description: z.string({
    required_error: "Detailed description is required",
  }),
  startDate: z.string({ required_error: "Start Date is required" }).optional(),
  endDate: z.string({ required_error: "End Date is required" }).optional(),
  travelType: z.string({ required_error: "Travel type is required" }),
  file: z.any().optional(),
});

export const travelRequestValidationSchema = z.object({
  age: z.string({ required_error: "age is required" }),
  contactNumber: z.string({ required_error: "contact number is required" }),
});


export   const profileValidationSchema = z.object({
  username: z.string({ required_error: "username is required" }).optional(),
  email: z.string({ required_error: "email is required" }).optional(),
  profile: z.object({
    bio: z.string({ required_error: "bio is required" }).optional(),
    contactNumber: z
      .string({ required_error: "contact number is required" })
      .optional(),
    age: z.string({ required_error: "age  is required" }).optional(),
  }),
});