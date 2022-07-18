import { render, screen } from "@testing-library/react";
import App from "./components/App";
import { _saveQuestion } from "../src/utils/_DATA";

test("renders learn react link", () => {
  render(<App />);
  screen.debug();
});
