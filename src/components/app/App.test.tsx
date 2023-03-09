import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Given the App component", () => {
  describe("When", () => {
    test("Then", () => {
      render(<App></App>);
      expect(screen.getByRole("heading")).toBeInTheDocument();
    });
  });
});
