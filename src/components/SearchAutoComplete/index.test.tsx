import React from "react";
import { render } from "@testing-library/react";
import TextBoxComp, { TextBoxCompPropTypes } from "./index";

test("TextBox matches snapshot", () => {
  const mockProps: TextBoxCompPropTypes = {
    value: "search text",
    handleOnChange: jest.fn(),
    label: "search text",
  };

  const { asFragment } = render(<TextBoxComp {...mockProps} />);
  expect(asFragment()).toMatchSnapshot();
});
