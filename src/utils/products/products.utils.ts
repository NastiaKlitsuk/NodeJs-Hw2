import { Product } from '../../models';

export function isProductExists(id: string, products: Product[]) {
  return products.find(product => product.id === id);
}

export function getNewProductId(
  productsCount: number,
  deletedProductIds: string[],
) {
  return deletedProductIds.length ? deletedProductIds.shift() : (productsCount + 1).toString();
}
