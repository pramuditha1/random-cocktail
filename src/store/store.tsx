import { configureStore } from "@reduxjs/toolkit";
import cocktailReducer from "./reducers/cocktailSlice";

const store = configureStore({
  reducer: {
    cocktails: cocktailReducer,
  },
});
// store dispathc type that will used to dispatch async actions
export type AppDispatch = typeof store.dispatch;
// root store type that will used in selectors
export type RootStore = ReturnType<typeof store.getState>;
export default store;
