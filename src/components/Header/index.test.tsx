import React from "react";
import { render } from "@testing-library/react";
import Header, { HeaderPropTypes } from "./index";

test("Header matches snapshot", () => {
  const mockProps: HeaderPropTypes = {
    title: "cocktail app",
  };

  const { asFragment } = render(<Header {...mockProps} />);
  expect(asFragment()).toMatchSnapshot();
});
