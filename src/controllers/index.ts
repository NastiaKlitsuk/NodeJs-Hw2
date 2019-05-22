import { Application } from 'express';
import express from 'express';
import productsController from './products';

export function initControllers(app: express.Application) {
  productsController(app);
}

export { productsController };
