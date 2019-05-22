import { Application } from 'express';
import { sendProductsResponse, sendProductById } from '../routes/products';

export default function setup(app: Application) {
  app.get('/api/products', sendProductsResponse);
  app.get('/api/products/:id', sendProductById);
}
