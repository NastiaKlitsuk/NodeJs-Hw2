import { Application } from 'express';
import { sendProducts, sendProductById, sendCreatedProduct } from '../routes/products';

export default function setup(app: Application) {
  app.get('/api/products', sendProducts);
  app.get('/api/products/:id', sendProductById);
  app.post('/api/products', sendCreatedProduct);

}
