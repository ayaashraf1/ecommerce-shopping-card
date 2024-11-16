// ProductList.test.tsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ProductList from "./ProductList"; // Adjust the import path as necessary// Adjust the import path as necessary
import { mockCartItems } from "../mockProducts";

// Mock Product component
jest.mock("../Product/Product", () => {
  return ({ product, onAddToCart }: { product: any; onAddToCart: any }) => (
    <div data-testid="product">
      <h3>{product.title}</h3>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
});

describe("ProductList Component", () => {
  const mockAddToCart = jest.fn();

  test("renders the product list with products", () => {
    render(
      <ProductList products={mockCartItems} onAddToCart={mockAddToCart} />
    );

    // Check if the heading is rendered
    expect(
      screen.getByRole("heading", { name: /all product/i })
    ).toBeInTheDocument();

    // Check if all products are rendered
    const productElements = screen.getAllByTestId("product");
    expect(productElements).toHaveLength(mockCartItems.length);
    expect(
      screen.getByText("Eyeshadow Palette with Mirror")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Essence Mascara Lash Princess")
    ).toBeInTheDocument();
  });

  test("calls onAddToCart when the button is clicked", () => {
    render(
      <ProductList products={mockCartItems} onAddToCart={mockAddToCart} />
    );

    // Simulate clicking the "Add to Cart" button for the first product
    const addToCartButton = screen.getAllByText(/add to cart/i)[0];
    fireEvent.click(addToCartButton);

    // Check if the mock function was called with the correct product
    expect(mockAddToCart).toHaveBeenCalledWith(mockCartItems[0]);
  });
});
