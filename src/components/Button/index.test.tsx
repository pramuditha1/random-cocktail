import React from "react";
import { render } from "@testing-library/react";
import { ButtonProps } from "@mui/material/Button";
import ButtonComp from "./index";

type VariantType = ButtonProps["variant"];
test("ButtonComp matches snapshot", () => {
  const mockProps: {
    variant: VariantType;
    text: string;
    onClickHandler: ButtonProps["onClick"];
  } = {
    variant: "contained",
    text: "Favourite Items",
    onClickHandler: jest.fn(),
  };

  const { asFragment } = render(<ButtonComp {...mockProps} />);
  expect(asFragment()).toMatchSnapshot();
});
