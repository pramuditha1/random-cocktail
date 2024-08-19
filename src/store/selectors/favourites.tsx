import { createSelector } from "@reduxjs/toolkit";
import { RootStore } from "../store";

const favouriteState = (state: RootStore) => state.favourites;

export const selectFavouriteCocktails = createSelector(
  favouriteState,
  (cocktails) => cocktails.data
);