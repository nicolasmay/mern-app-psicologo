import { z } from "zod";

export const registerSchema = z.object({
  email: z
    .string({ required_error: "Se requiere un email" })
    .email({ message: "Email invalido" }),

  telefono: z
    .number({ required_error: "Se requiere un numero" })
    .min(10, { message: "El numero debe tener al menos 10 caracteres" }),

  password: z
    .string({ required_error: "Se requiere una contraseña" })
    .min(6, { message: "La contraseña debe tener al menos 6 caracteresXD" }),
});

export const loginSchema = z.object({
  email: z
    .string({ required_error: "Se requiere un email" })
    .email({ message: "Email invalido" }),
  password: z
    .string({ required_error: "Se requiere una contraseña" })
    .min(6, { message: "La contraseña debe tener al menos 6 caracteres" }),
});
