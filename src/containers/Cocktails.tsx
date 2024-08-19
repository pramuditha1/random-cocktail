import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store/store";
import {
  makeSelectCocktails,
  makeSelectIsLoadingCocktails,
} from "../store/selectors";
import { CocktailState, fetchCocktail } from "../store/reducers/cocktailSlice";
import { useEffect, useCallback } from "react";
import ItemCard from "../components/ItemCard";
import Lable from "../components/Lable";
import { localization } from "../locale";
import { addFavourite } from "../store/reducers/favouritesSlice";
import { CircularProgress } from "@mui/material";

const Cocktails: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cocktails = useSelector(makeSelectCocktails);
  const isLoading = useSelector(makeSelectIsLoadingCocktails);

  useEffect(() => {
    dispatch(fetchCocktail());
  }, [dispatch]);

  const handleAddToFavourites = useCallback(
    (item: CocktailState) => {
      dispatch(addFavourite({ ...item, quantity: 1 }));
    },
    [dispatch]
  );

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-full mt-4">
        <CircularProgress />
      </div>
    );
  }

  if (!cocktails?.length) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Lable
          text={localization.noCocktailsFound}
          variant="body1"
          className="flex justify-center"
        />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Lable text="Cocktails" variant="h4" className="flex justify-center" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-1">
        {cocktails.map((item, key) => (
          <ItemCard
            key={key}
            name={item.name}
            image={item.image}
            description={item.instructions}
            addToCartHandler={() => handleAddToFavourites(item)}
          />
        ))}
      </div>
    </div>
  );
};

export default Cocktails;
