import { Product } from '../../models';

export function isProductExists(id: string, products: Product[]) {
  return products.find(product => product.id === id);
}
