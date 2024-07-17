import z from 'zod';

const ciSchema = z.object({
  ci: z.number({ invalid_type_error: 'El name del usuario es del tipo invalido' }).int().positive()
});

export const validateCi = (obj) => {
  return ciSchema.safeParse(obj);
};
