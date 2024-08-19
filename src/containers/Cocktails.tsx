import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store/store";
import { makeSelectCocktails } from "../store/selectors";
import { CocktailState, fetchCocktail } from "../store/reducers/cocktailSlice";
import { useEffect } from "react";
import ItemCard from "../components/ItemCard";
import Lable from "../components/Lable";
import { localization } from "../locale";
import { addFavourite } from "../store/reducers/favouritesSlice";

const Cocktails: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cocktails = useSelector(makeSelectCocktails);

  useEffect(() => {
    dispatch(fetchCocktail());
  }, [dispatch]);

  const handleAddToFavourites = (item: CocktailState) => {
    // add cocktail to favourites list
    dispatch(addFavourite(item));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Lable text="Cocktails" variant="h4" className="flex justify-center" />
      {!cocktails && (
        <Lable
          text={localization.noCocktailsFound}
          variant="body1"
          className="flex justify-center"
        />
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-1">
        {cocktails &&
          cocktails.map((item, key) => (
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
