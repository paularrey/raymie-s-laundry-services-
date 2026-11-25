import { z } from "zod";

const phoneRegex = /^[+]?[\d\s()-]{7,20}$/;

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z
    .string()
    .regex(phoneRegex, "Enter a valid phone number")
    .min(7, "Enter a valid phone number"),
  email: z.email("Enter a valid email").or(z.literal("")).optional(),
  subject: z.string().min(3, "Add a short subject"),
  message: z.string().min(10, "Tell us a little more (at least 10 characters)"),
  website: z.string().max(0, "").optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const bookingSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z
    .string()
    .regex(phoneRegex, "Enter a valid phone number")
    .min(7, "Enter a valid phone number"),
  address: z.string().min(5, "Enter your pickup address"),
  service: z.string().min(1, "Choose a service"),
  pickupDate: z.string().min(1, "Choose a pickup date"),
  slot: z.string().optional().or(z.literal("")),
  notes: z.string().optional().or(z.literal("")),
  website: z.string().max(0, "").optional().or(z.literal("")),
});

export type BookingInput = z.infer<typeof bookingSchema>;
