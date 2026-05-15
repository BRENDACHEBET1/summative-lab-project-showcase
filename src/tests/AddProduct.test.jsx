import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import AddProduct from "../pages/AddProduct";
import { ProductsProvider } from "../context/ProductsContext";

test("adds a new product", async () => {
  const user = userEvent.setup();

  render(
    <BrowserRouter>
      <ProductsProvider>
        <AddProduct />
      </ProductsProvider>
    </BrowserRouter>
  );

//   title
  expect(screen.getByTestId("add-product-title")).toBeTruthy();

  // fill form
  await user.type(screen.getByLabelText(/title/i), "Test Product");
  await user.type(screen.getByLabelText(/description/i), "Test Description");
  await user.type(screen.getByLabelText(/category/i), "Electronics");
  await user.type(screen.getByLabelText(/price/i), "100");
  await user.type(screen.getByLabelText(/image url/i), "https://test.com/img.png");

  // submit
  await user.click(screen.getByRole("button", { name: /add product/i }));
});