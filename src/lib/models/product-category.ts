import type { Product } from "./product";

export interface ProductCategory {
  name: string;
  products: Product[];
}