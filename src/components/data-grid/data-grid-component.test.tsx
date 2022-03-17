import React from "react";
import { render, screen } from "@testing-library/react";
import DataGridComponent from "./data-grid-component";

test("renders learn react link", () => {
  render(<DataGridComponent />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
