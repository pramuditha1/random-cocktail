import { createSelector } from "@reduxjs/toolkit";
import { RootStore } from "../store";

const cocktailState = (state: RootStore) => state.cocktails;

export const selectLoading = createSelector(
  cocktailState,
  (cocktails) => cocktails.loading
);

export const selectCocktails = createSelector(
  cocktailState,
  (cocktails) => cocktails.data
);

export const selectError = createSelector(
  cocktailState,
  (cocktailState) => cocktailState.error
);
