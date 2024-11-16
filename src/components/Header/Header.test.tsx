// Header.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom"; // Import Router
import Header from "./Header"; // Adjust the import path as necessary

describe("Header Component", () => {
  test("renders the header with the correct title", () => {
    render(
      <Router>
        {/* Wrap with Router for Link */}
        <Header />
      </Router>
    );

    // Check for the header title
    expect(
      screen.getByRole("heading", { name: /e-commerce store/i })
    ).toBeInTheDocument();
  });

  test("renders navigation links", () => {
    render(
      <Router>
        {/* Wrap with Router for Link */}
        <Header />
      </Router>
    );

    // Check for the Products link
    expect(screen.getByRole("link", { name: /products/i })).toBeInTheDocument();

    // Check for the Cart link
    expect(screen.getByRole("link", { name: /cart/i })).toBeInTheDocument();
  });
});
