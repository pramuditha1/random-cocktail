import React from "react";
import { render } from "@testing-library/react";
import TooltipCom, { ToolTipPropTypes } from "./index";

test("Tooltip component matches snapshot", () => {
  const mockProps: ToolTipPropTypes = {
    text: "Pour the corona into an 18oz beer glass pour the bacardi and lim...",
    maxLimit: 60
  };

  const { asFragment } = render(<TooltipCom {...mockProps} />);
  expect(asFragment()).toMatchSnapshot();
});
