import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductList from "../components/ProductList/ProductList";
import Cart from "../components/Cart/Cart";
import { ProductType } from "../components/types";
import { ProductDetails } from "../components/ProductDetails/ProductDetails";

interface AppRoutesProps {
  products: ProductType[];
  cartItems: ProductType[];
  onAddToCart: (product: ProductType) => void;
  onRemoveFromCart: (id: number) => void;
  onAddOneMore: (id: number) => void;
  onRemoveOne: (id: number) => void;
}

const AppRoutes: React.FC<AppRoutesProps> = ({
  products,
  cartItems,
  onAddToCart,
  onRemoveFromCart,
  onAddOneMore,
  onRemoveOne,
}) => {
  return (
    <Routes>
      <Route
        path="/"
        element={<ProductList products={products} onAddToCart={onAddToCart} />}
      />
      <Route
        path="/cart"
        element={
          <Cart
            cartItems={cartItems}
            onRemoveFromCart={onRemoveFromCart}
            onAddOneMore={onAddOneMore}
            onRemoveOne={onRemoveOne}
          />
        }
      />
      <Route
        path="/product/:id"
        element={<ProductDetails products={products} />}
      />
    </Routes>
  );
};

export default AppRoutes;
