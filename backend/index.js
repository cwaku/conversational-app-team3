import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import initializeDb from './db/dbinit';
import {
  userRoute,
  courseRoute,
  socialLoginRoute,
  assignmentRoute,
  groupRoute,
  adminRoute,
} from './routes';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('short'));

app.use('/home', (req, res) => {
  res.status(200).send('Welcome to this awesome API!!');
});

app.use('/api/v1/auth', userRoute);
app.use('/api/v1/social', socialLoginRoute);
app.use('/api/v1/course', courseRoute);
app.use('/api/v1/assignment', assignmentRoute);
app.use('/api/v1/group', groupRoute);
app.use('/api/v1/admin', adminRoute);

app.use((req, res) => {
  res.status(404).send({
    status: 'error',
    error: '404 Not Found !',
  });
});

app.listen(PORT, async () => {
  await initializeDb();
  console.log(`Listening on port: ${PORT}`);
});

export default app;
