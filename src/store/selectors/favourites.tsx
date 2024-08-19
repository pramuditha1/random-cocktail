import { createSelector } from "@reduxjs/toolkit";
import { RootStore } from "../store";

const favouriteState = (state: RootStore) => state.favourites;

export const selectFavouriteCocktails = createSelector(
  favouriteState,
  (cocktails) => cocktails.data
);

export const selectFavouriteItemsCount = createSelector(
  favouriteState,
  (cocktails) => {
    const count = cocktails.data?.reduce(
      (acc, current) => current?.quantity + acc,
      0
    );
    return count;
  }
);
