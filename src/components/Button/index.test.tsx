import React from "react";
import { render } from "@testing-library/react";
import ButtonComp, { ButtonPropTypes } from "./index";

test("ButtonComp matches snapshot", () => {
  const mockProps: ButtonPropTypes = {
    variant: "contained",
    text: "Favourite Items",
    onClickHandler: jest.fn(),
  };

  const { asFragment } = render(<ButtonComp {...mockProps} />);
  expect(asFragment()).toMatchSnapshot();
});
