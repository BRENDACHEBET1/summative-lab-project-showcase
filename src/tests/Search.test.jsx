import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { test, expect } from "vitest";
import Search from "../components/Search";
import { ProductsProvider } from "../context/ProductsContext";

test("updates search input correctly", async () => {
  render(
    <ProductsProvider>
      <Search />
    </ProductsProvider>
  );

  const input = screen.getByPlaceholderText("Search products...");

  await userEvent.type(input, "apple");

  expect(input.value).toBe("apple");
});