import { Router } from 'express';
import { modelCI } from '../models/ci.js';
import { validateCi } from '../schemas/ci.js';

export const ciRouter = Router();

ciRouter.get('/', async (_req, res) => {
	const data = await modelCI.get();
	res.json(data);
});

ciRouter.post('/', async (req, res) => {
	const result = validateCi(req.body);

	if (result.error) {
		return res.status(400).json({ error: result.error });
	}

	const data = await modelCI.post({ input: result.data });

	return res.status(201).json(data);
});

ciRouter.delete('/', async (req, res) => {
	const data = await modelCI.delete();
	res.json(data);
});
