import { store } from '../store';
import { Request, Response, NextFunction } from 'express';

const products = store.products;

export const sendProductsResponse = (
  request: Request,
  response: Response,
  next: NextFunction,
) => response.send(products);
