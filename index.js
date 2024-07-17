import express, { json } from 'express';
import { usersRouter } from './routes/users.js';
import { ciRouter } from './routes/ci.js';
import { login, validateLogin } from './schemas/login.js';

import cors from 'cors';
import { dbOpen } from './database/mongo.js';
import multer from 'multer';

const upload = multer({ dest: './upload' });

dbOpen();
const app = express();

app.use(
  cors({
    origin: '*'
  })
);

app.use(json());

app.use('/users', usersRouter);

app.use('/ci', ciRouter);

app.post('/login', async (req, res) => {
  const result = validateLogin(req.body);

  if (result.error) {
    return res.status(400).json({ error: result.error });
  }

  const verify = await login.find({});

  if (verify[0].email !== result.data.email || verify[0].password !== result.data.password)
    return res.status(400).json({ error: 'usuario no disponible', open: false });

  return res.status(200).json({ message: 'usuario admisible', open: true });
});

app.post('/example', upload.single('ufile'), (req, res) => {
  console.log(req.file, req.body);

  return res.json(req.body);
});

app.listen(3000);
