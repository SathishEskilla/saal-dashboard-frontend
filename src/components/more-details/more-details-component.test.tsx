import React from "react";
import { render, screen } from "@testing-library/react";
import MoreDetailsComponent from "./more-details-component";

test("renders learn react link", () => {
  render(<MoreDetailsComponent />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
