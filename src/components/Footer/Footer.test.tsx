// Footer.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer"; // Adjust the import path as necessary

describe("Footer Component", () => {
  test("renders footer with correct text", () => {
    render(<Footer />);

    const year = new Date().getFullYear(); // Get the current year
    const footerText = `© ${year} E-Commerce Store. All rights reserved.`;

    // Check if the footer text is in the document
    expect(screen.getByText(footerText)).toBeInTheDocument();
  });
});
