import { selectCocktails, selectLoading } from "./cocktail";
import {
  selectFavouriteCocktails,
  selectFavouriteItemsCount,
} from "./favourites";

export const makeSelectCocktails = selectCocktails;
export const makeSelectIsLoadingCocktails = selectLoading;
export const makeSelectFavouriteCocktails = selectFavouriteCocktails;
export const makeSelectTotalFavouritesCount = selectFavouriteItemsCount;
