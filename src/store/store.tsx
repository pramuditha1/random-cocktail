import { configureStore } from "@reduxjs/toolkit";
import rootRedeucer from "./reducers";

const store = configureStore({
  reducer: rootRedeucer,
});

// store dispathc type that will used to dispatch async actions
export type AppDispatch = typeof store.dispatch;
// root store type that will used in selectors
export type RootStore = ReturnType<typeof store.getState>;
export default store;
