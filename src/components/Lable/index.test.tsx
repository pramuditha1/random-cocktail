import React from "react";
import { render } from "@testing-library/react";
import Lable, { LablePropTypes } from "./index";

test("Lable component matches snapshot", () => {
  const mockProps: LablePropTypes = {
    variant: "h1",
    text: "test",
  };

  const { asFragment } = render(<Lable {...mockProps} />);
  expect(asFragment()).toMatchSnapshot();
});
