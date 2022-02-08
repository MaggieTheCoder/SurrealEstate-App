import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("renders learn react link", () => {
  render(<App />);
  const Element = screen.getByText(/Surreal Estate/i);
  expect(Element).toBeInTheDocument();
});
