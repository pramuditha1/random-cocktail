import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URL_COCKTAIL_RANDOM } from "../../constants";

interface CocktailState {
  id: string;
  name: string;
  category: string;
  alcoholic: string;
  instructions: string;
  image: string;
  glass: string;
}

interface InitialStateType {
  data: CocktailState[] | null;
  loading: boolean;
  error: Error | string | null;
}

const initialState: InitialStateType = {
  data: null,
  loading: false,
  error: null,
};

export const fetchCocktail = createAsyncThunk("cocktail/fetch", async () => {
  const promises = Array.from({ length: 5 }, () => fetch(URL_COCKTAIL_RANDOM));
  const responses = await Promise.all(promises);
  const data = await Promise.all(responses.map((response) => response.json()));
  const cocktails: CocktailState[] = data.map((drinkData) => ({
    id: drinkData.drinks[0].idDrink,
    name: drinkData.drinks[0].strDrink,
    category: drinkData.drinks[0].strCategory,
    alcoholic: drinkData.drinks[0].strAlcoholic,
    instructions: drinkData.drinks[0].strInstructions,
    image: drinkData.drinks[0].strDrinkThumb,
    glass: drinkData.drinks[0].strGlass,
  }));

  return cocktails;
});

const cocktailSlice = createSlice({
  name: "cocktail",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCocktail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCocktail.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.data = state.data
          ? [...state.data, ...action.payload]
          : action.payload;
      })
      .addCase(fetchCocktail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || Error("Failed to fetch");
      });
  },
});

export default cocktailSlice.reducer;
