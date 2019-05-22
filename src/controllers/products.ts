import { Application } from 'express';
import { sendProductsResponse } from '../routes/products';

export default function setup(app: Application) {
  app.get('/api/products', sendProductsResponse);
}
