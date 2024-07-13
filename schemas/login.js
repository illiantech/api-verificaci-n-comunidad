import z, { string } from 'zod';
import mongoose, { model } from 'mongoose';
const { Schema } = mongoose;

const loginSchema = z.object({
	email: z.string().email(),
	password: z.string()
});

export const validateLogin = (obj) => {
	return loginSchema.safeParse(obj);
};

// mongo

const loginSchemaMongo = new Schema({
	email: String,
	password: String
});

export const login = model('login', loginSchemaMongo);

