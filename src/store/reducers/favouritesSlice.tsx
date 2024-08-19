import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FavouriteItemState {
  id: string;
  name: string;
  category: string;
  alcoholic: string;
  instructions: string;
  image: string;
  quantity: number;
}

interface InitialStateType {
  data: FavouriteItemState[] | null;
  loading: boolean;
  error: Error | string | null;
}

const initialState: InitialStateType = {
  data: [],
  loading: false,
  error: null,
};

const favouritesSlice = createSlice({
  name: "favouriteCocktails",
  initialState,
  reducers: {
    addFavourite(state, action: PayloadAction<FavouriteItemState>) {
      const existingItem = state.data?.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 0) + 1;
      } else {
        const newFavouriteItem = { ...action.payload };
        state.data?.push(newFavouriteItem);
      }
    },
    removeFavourite(state, action: PayloadAction<{ id: string }>) {
      const itemIndex = state.data?.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex !== undefined && itemIndex >= 0 && state.data) {
        const updatingFavItem = state.data[itemIndex];
        if (updatingFavItem.quantity && updatingFavItem.quantity > 1) {
          // reduce quantity by 1
          updatingFavItem.quantity -= 1;
        } else {
          // remove item from given index
          state.data.splice(itemIndex, 1);
        }
      }
    },
  },
  extraReducers: () => {},
});

export const { addFavourite, removeFavourite } = favouritesSlice.actions;

export default favouritesSlice.reducer;
