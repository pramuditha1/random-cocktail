import React from "react";
import { render } from "@testing-library/react";
import Header, { HeaderPropTypes } from "./index";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import favouritesReducer from "../../store/reducers/favouritesSlice";

// Create a mock Redux store
const mockStore = configureStore({
  reducer: {
    favourites: favouritesReducer,
  },
});

test("Header matches snapshot", () => {
  const mockProps: HeaderPropTypes = {
    title: "cocktail app",
  };

  const { asFragment } = render(
    <Provider store={mockStore}>
      <Header {...mockProps} />
    </Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});
