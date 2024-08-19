import React from "react";
import { render } from "@testing-library/react";
import FavouriteListItem, { FavouriteListItemPropTypes } from "./index";

test("FavouriteListItem matches snapshot", () => {
  const mockProps: FavouriteListItemPropTypes = {
    name: "test",
  quantity: 1,

  image: "https://www.thecocktaildb.com/images/media/drink/20d63k1504885263.jpg",
  addItem: jest.fn(),
  removeItem: jest.fn(),
  };

  const { asFragment } = render(
      <FavouriteListItem {...mockProps} />
  );

  expect(asFragment()).toMatchSnapshot();
});
