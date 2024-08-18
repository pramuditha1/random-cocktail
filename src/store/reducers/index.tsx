import { combineReducers } from "redux";
import cocktailSlice from "./cocktailSlice";

const rootRedeucer = combineReducers({
  cocktails: cocktailSlice,
});

export default rootRedeucer;
