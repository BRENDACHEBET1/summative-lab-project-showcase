import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ProductsProvider } from "../context/ProductsContext";
import ProductList from "../pages/ProductList";

test("renders product list page", () => {
  render(
    <BrowserRouter>
      <ProductsProvider>
        <ProductList />
      </ProductsProvider>
    </BrowserRouter>
  );

  // check UI elements
  expect(screen.getByPlaceholderText(/search products/i)).toBeTruthy();
  expect(screen.getByText(/categories/i)).toBeTruthy();
});