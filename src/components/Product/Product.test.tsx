// Product.test.tsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Product from "./Product"; // Adjust the import path as necessary
import { ProductType } from "../types";
import { mockCartItems } from "../mockProducts";

describe("Product Component", () => {
  const mockProduct = mockCartItems[0];

  const mockOnAddToCart = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks(); // Clear mock calls before each test
  });

  test("renders product information correctly", () => {
    render(<Product product={mockProduct} onAddToCart={mockOnAddToCart} />);

    // Check for product title
    expect(
      screen.getByRole("heading", { name: /Essence Mascara Lash Princess/i })
    ).toBeInTheDocument();

    // Check for product description
    expect(
      screen.getByText(
        /The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula./i
      )
    ).toBeInTheDocument();

    // Check for product price
    expect(screen.getByText("$9.99")).toBeInTheDocument();

    // Check for product image
    expect(
      screen.getByAltText(/Essence Mascara Lash Princess/i)
    ).toHaveAttribute(
      "src",
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"
    );
  });

  test("calls onAddToCart when Add to Cart button is clicked", () => {
    render(<Product product={mockProduct} onAddToCart={mockOnAddToCart} />);

    const button = screen.getByRole("button", { name: /add to cart/i });
    fireEvent.click(button);

    expect(mockOnAddToCart).toHaveBeenCalledWith(mockProduct);
  });
});
