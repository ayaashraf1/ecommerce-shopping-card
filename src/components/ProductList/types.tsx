import { ProductType } from "../types";

export interface ProductListProps {
  products: ProductType[];
  onAddToCart: (product: ProductType) => void;
}
