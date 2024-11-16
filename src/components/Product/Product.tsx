import React from "react";
import { ProductType } from "../types";
import { ProductWrapper } from "./Product.styled";

interface ProductProps {
  product: ProductType;
  onAddToCart: (product: ProductType) => void;
}

const Product: React.FC<ProductProps> = ({ product, onAddToCart }) => {
  return (
    <ProductWrapper>
      <img
        src={product.thumbnail}
        alt={product.title}
        width={100}
        height={100}
      />
      <h3>{product.title}</h3>
      <p className="description">{product.description.trim()}</p>
      <p>${product.price.toFixed(2)}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </ProductWrapper>
  );
};

export default Product;
