import { store } from '../store';
import { Request, Response, NextFunction } from 'express';
import { isProductExists } from '../utils/products/products.utils';
import {
  send400ForInvalidProductId,
  send404ForNotExistingProduct
} from '../validations/products/products.validation';

const products = store.products;

interface HttpHandlerProps {
  request: Request;
  response: Response;
  next: NextFunction;
}

export function sendProductsResponse({
  request,
  response,
  next
}: HttpHandlerProps) {
  response.send(products);
}

export function sendProductById({ request, response, next }: HttpHandlerProps) {
  const id = request.params.id;
  const maybeProduct = isProductExists(id, products);
  const isExist = maybeProduct ? true : false;

  if (send400ForInvalidProductId(id, response)) return;
  if (send404ForNotExistingProduct(isExist, response)) return;
  response.send(maybeProduct);
}
