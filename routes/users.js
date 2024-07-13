import { Router } from 'express';
import { modelUsers } from '../models/users.js';
import { validateUser } from '../schemas/users.js';

export const usersRouter = Router();

usersRouter.get('/', async (req, res) => {
	const data = await modelUsers.get();

	return res.json(data);
});

usersRouter.post('/', async (req, res) => {
	const result = validateUser(req.body);

	if (result.error) {
		return res.status(400).json({ error: result.error });
	}

	const data = await modelUsers.post({ input: result.data });

	if (!data) {
		return res.status(400).json({ error: 'Cedula no registrada o usuario ya registrado' });
	}
	return res.status(201).json(data);
});

usersRouter.delete('/', async (req, res) => {
	const data = await modelUsers.delete();

	return res.json(data);
});
