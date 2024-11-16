import { ProductType } from "../types";

export interface CartProps {
  cartItems: ProductType[];
  onRemoveFromCart: (id: number) => void;
  onAddOneMore: (id: number) => void;
  onRemoveOne: (id: number) => void;
}
