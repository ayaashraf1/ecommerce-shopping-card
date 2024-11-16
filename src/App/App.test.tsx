// App.test.tsx
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App"; // Adjust the path as necessary
import { getAllProducts } from "../services/apis"; // Mock this service
import { BrowserRouter as Router } from "react-router-dom";

// Mocking necessary dependencies
jest.mock("../services/apis");
jest.mock("../components/Header/Header", () => () => <div>Header</div>);
jest.mock("../components/Footer/Footer", () => () => <div>Footer</div>);
jest.mock("../routes/AppRoutes", () => () => <div>AppRoutes</div>);
jest.mock("../components/store", () => ({
  updateLocalStorage: jest.fn(),
}));

describe("App Component", () => {
  beforeEach(() => {
    localStorage.clear(); // Clear localStorage before each test
  });

  test("renders loading state initially", () => {
    (getAllProducts as jest.Mock).mockImplementation(
      () => new Promise(() => {}) // Resolve nothing to simulate loading
    );

    render(<App />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test("renders error message on fetch failure", async () => {
    (getAllProducts as jest.Mock).mockImplementation(() =>
      Promise.reject(new Error("Failed to load products"))
    );

    render(<App />);

    await waitFor(() =>
      expect(screen.getByText(/failed to load product/i)).toBeInTheDocument()
    );
  });

  test("renders the app with products after loading", async () => {
    const mockProducts = { products: [{ id: 1, name: "Product 1" }] };
    (getAllProducts as jest.Mock).mockResolvedValue(mockProducts);

    render(<App />);

    await waitFor(() =>
      expect(screen.queryByText(/loading/i)).not.toBeInTheDocument()
    );
    expect(screen.getByText(/header/i)).toBeInTheDocument(); // Header should be rendered
    expect(screen.getByText(/approutes/i)).toBeInTheDocument(); // AppRoutes should be rendered
    expect(screen.getByText(/footer/i)).toBeInTheDocument(); // Footer should be rendered
  });
});
