import cors from 'cors';
import express from 'express';
import { productsController } from './controllers';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

productsController(app);

export { app };
