import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./components/Home.jsx";

describe("Home Page mount", () => {
  it("must display the home page title", () => {
    render(<Home />);
    const title = screen.getByText(/The Food SPA/i);
    expect(title).toBeInTheDocument();
  });
});