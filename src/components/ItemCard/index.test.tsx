import React from "react";
import { render } from "@testing-library/react";
import ItemCard, { ItemCardPropTypes } from "./index";

test("Header matches snapshot", () => {
  const mockProps: ItemCardPropTypes = {
    name: "name",
    description: "description",
    image:
      "https://www.thecocktaildb.com/images/media/drink/qxuppv1468875308.jpg",
    addToCartHandler: jest.fn(),
  };

  const { asFragment } = render(<ItemCard {...mockProps} />);
  expect(asFragment()).toMatchSnapshot();
});
