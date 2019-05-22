import * as products from './products.json';
import { Product } from '../models/index.js';

interface Store {
  products: Product[];
}

export const store: Store = {
  products,
};
