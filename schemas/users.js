import z from 'zod';

const userSchema = z.object({
  name: z
    .string({
      invalid_type_error: 'El name del usuario es del tipo invalido'
    })
    .min(20)
    .max(100),
  tlf: z.number().int().positive(),
  ci: z.number().int().positive(),
  address: z.string().min(20).max(100),
  URLimg: z.string()
});

export const validateUser = (obj) => {
  return userSchema.safeParse(obj);
};
