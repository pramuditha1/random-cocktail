import { combineReducers } from "redux";
import cocktailSlice from "./cocktailSlice";
import favouritesSlice from "./favouritesSlice";

const rootRedeucer = combineReducers({
  cocktails: cocktailSlice,
  favourites: favouritesSlice
});

export default rootRedeucer;
