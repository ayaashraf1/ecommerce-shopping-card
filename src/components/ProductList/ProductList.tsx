import React from "react";
import Product from "../Product/Product";
import { ProductListWrapper } from "./ProductList.styled";
import { ProductListProps } from "./types";

const ProductList: React.FC<ProductListProps> = ({ products, onAddToCart }) => {
  return (
    <ProductListWrapper>
      <h2> All Product</h2>
      <div id="all-products">
        {products?.map((product) => (
          <Product
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </ProductListWrapper>
  );
};

export default ProductList;
