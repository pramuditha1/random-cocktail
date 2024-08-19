import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URL_COCKTAIL_RANDOM, URL_COCKTAIL_SEARCH } from "../../constants";

export interface CocktailState {
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
  // contains resolved array of promises, each object has drinks array
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

export const searchCocktailsByName = createAsyncThunk(
  "cocktail/search",
  async (name: string) => {
    try {
      const response = await fetch(`${URL_COCKTAIL_SEARCH}${name}`);
      const data = await response.json();
      if (!data.drinks) {
        // empty result will return and empty array to reducer
        return [];
      } else {
        // drink array with search results
        const cocktails: CocktailState[] = data.drinks.map(
          (drinkData: any) => ({
            id: drinkData.idDrink,
            name: drinkData.strDrink,
            category: drinkData.strCategory,
            alcoholic: drinkData.strAlcoholic,
            instructions: drinkData.strInstructions,
            image: drinkData.strDrinkThumb,
            glass: drinkData.strGlass,
          })
        );
        return cocktails;
      }
    } catch (error) {
      throw new Error("Failed to fetch cocktails: ");
    }
  }
);
const cocktailSlice = createSlice({
  name: "cocktail",
  initialState,
  reducers: {},
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
      })
      .addCase(searchCocktailsByName.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchCocktailsByName.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        console.log(action.payload.length, "length");
        if (action.payload.length === 0) {
          // if search result does not have values set cocktail data null
          state.data = null;
        } else {
          // otherwise set cocktail data to search results
          state.data = action.payload;
        }
      })
      .addCase(searchCocktailsByName.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message || Error("Failed to search cocktails");
      });
  },
});

export default cocktailSlice.reducer;
