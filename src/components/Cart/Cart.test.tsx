// Cart.test.tsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Cart from "./Cart"; // Adjust the path as necessary
import { saveItemsInLocalStorage } from "../store";
import { BrowserRouter as Router } from "react-router-dom"; // Import Router
import { mockCartItems } from "../mockProducts";

// Mock the saveItemsInLocalStorage function
jest.mock("../store", () => ({
  saveItemsInLocalStorage: jest.fn(),
}));

describe("Cart Component", () => {
  const mockOnRemoveFromCart = jest.fn();
  const mockOnAddOneMore = jest.fn();
  const mockOnRemoveOne = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders empty cart message when cartItems is empty", () => {
    render(
      <Cart
        cartItems={[]}
        onRemoveFromCart={mockOnRemoveFromCart}
        onAddOneMore={mockOnAddOneMore}
        onRemoveOne={mockOnRemoveOne}
      />
    );

    expect(screen.getByText(/no items in cart/i)).toBeInTheDocument();
  });

  test("renders cart items and total price when items are in the cart", () => {
    render(
      <Router>
        {/* Wrap with Router */}
        <Cart
          cartItems={mockCartItems}
          onRemoveFromCart={mockOnRemoveFromCart}
          onAddOneMore={mockOnAddOneMore}
          onRemoveOne={mockOnRemoveOne}
        />
      </Router>
    );

    // Check for item titles
    expect(
      screen.getByText("Eyeshadow Palette with Mirror")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Essence Mascara Lash Princess")
    ).toBeInTheDocument();

    // Check for total price
    const totalPrice = 9.99 + 19.99 * 1;
    expect(
      screen.getByText(`Total: $${totalPrice.toFixed(2)}`)
    ).toBeInTheDocument();
  });

  test("calls onAddOneMore when + button is clicked", () => {
    render(
      <Router>
        <Cart
          cartItems={mockCartItems}
          onRemoveFromCart={mockOnRemoveFromCart}
          onAddOneMore={mockOnAddOneMore}
          onRemoveOne={mockOnRemoveOne}
        />
      </Router>
    );

    const addButton = screen.getAllByText("+")[0]; // Get the first product's add button
    fireEvent.click(addButton);

    expect(mockOnAddOneMore).toHaveBeenCalledWith(1); // Check with the product id
  });

  test("calls onRemoveOne when - button is clicked", () => {
    render(
      <Router>
        <Cart
          cartItems={mockCartItems}
          onRemoveFromCart={mockOnRemoveFromCart}
          onAddOneMore={mockOnAddOneMore}
          onRemoveOne={mockOnRemoveOne}
        />
      </Router>
    );

    const removeButton = screen.getAllByText("-")[0]; // Get the first product's remove button
    fireEvent.click(removeButton);

    expect(mockOnRemoveOne).toHaveBeenCalledWith(1); // Check with the product id
  });

  test("calls onRemoveFromCart when Remove button is clicked", () => {
    render(
      <Router>
        <Cart
          cartItems={mockCartItems}
          onRemoveFromCart={mockOnRemoveFromCart}
          onAddOneMore={mockOnAddOneMore}
          onRemoveOne={mockOnRemoveOne}
        />
      </Router>
    );

    const removeFromCartButton = screen.getAllByText("Remove")[0]; // Get the first product's remove button
    fireEvent.click(removeFromCartButton);

    expect(mockOnRemoveFromCart).toHaveBeenCalledWith(1); // Check with the product id
  });

  test("calls saveItemsInLocalStorage on cartItems change", () => {
    render(
      <Router>
        <Cart
          cartItems={mockCartItems}
          onRemoveFromCart={mockOnRemoveFromCart}
          onAddOneMore={mockOnAddOneMore}
          onRemoveOne={mockOnRemoveOne}
        />
      </Router>
    );

    expect(saveItemsInLocalStorage).toHaveBeenCalledWith(mockCartItems);
  });
});
