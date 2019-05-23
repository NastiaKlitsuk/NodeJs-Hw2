import { store } from '../store';
import { Request, Response, NextFunction } from 'express';
import {
  isProductExists,
  getNewProductId
} from '../utils/products/products.utils';
import {
  send400ForInvalidProductId,
  send404ForNotExistingProduct,
  send409ForInvalidProductName
} from '../validations/products/products.validation';
import { Product } from '../models';

const products = store.products;
const deletedProductsIds = store.deletedProductsIds;

export function getProducts(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  response.send(products);
}

export function getProductById(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const id = request.params.id;
  const maybeProduct = isProductExists(id, products);
  const isExist = maybeProduct ? true : false;

  if (send400ForInvalidProductId(id, response)) return;
  if (send404ForNotExistingProduct(isExist, response)) return;
  response.send(maybeProduct);
}

export function createProduct(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const product = request.body as Product;

  if (send409ForInvalidProductName(product.name, response)) return;

  product.id = getNewProductId(products.length, deletedProductsIds) || '';
  products.push(product);
  response.send(product);

  // tslint:disable-next-line: no-console
  console.log(products);
}

export function updateProduct(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const id = request.params.id;
  const maybeProduct = isProductExists(id, products);
  const isExist = maybeProduct ? true : false;
  const product = request.body as Product;

  if (send400ForInvalidProductId(id, response)) return;
  if (send404ForNotExistingProduct(isExist, response)) return;
  if (send409ForInvalidProductName(product.name, response)) return;

  Object.assign(maybeProduct, product);
  response.send(product);
}
