import express from 'express';
import cors from 'cors';
import signup from './api/signup.route.mjs';
import login from './api/login.route.mjs';
import patient from './api/patient.route.mjs';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '10mb' }));
app.use(cors());
app.use(express.json());

app.use('/api/v1/signup', signup);
app.use('/api/v1/login', login);
app.use('/api/v1/patient', patient);

app.use('*', (req, res) => res.status(404).json({ error: 'not found' }));

export default app;
