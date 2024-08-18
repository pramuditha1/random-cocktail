import React from "react";
import { render } from "@testing-library/react";
import Header from "./index";

test("Header matches snapshot", () => {
  const mockProps: {
    title: string;
  } = {
    title: "cocktail app",
  };

  const { asFragment } = render(<Header {...mockProps} />);
  expect(asFragment()).toMatchSnapshot();
});
