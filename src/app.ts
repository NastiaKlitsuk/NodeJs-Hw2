import cors from 'cors';
import express from 'express';
import { initControllers } from './controllers';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

initControllers(app);

export { app };
