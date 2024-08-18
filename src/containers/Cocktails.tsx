import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store/store";
import { makeSelectCocktails } from "../store/selectors";
import { fetchCocktail } from "../store/reducers/cocktailSlice";
import { useEffect } from "react";
import ItemCard from "../components/ItemCard";

const Cocktails: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cocktails = useSelector(makeSelectCocktails);
  useEffect(() => {
    dispatch(fetchCocktail());
  }, [dispatch]);

  const handleAddToFavourites = () => {
    console.log("clicked fav");
  };
  return (
    <>
      <h1>Cocktails</h1>
      {cocktails &&
        cocktails.map((item, key) => {
          return (
            <ItemCard
              key={key}
              name={item.name}
              image={item.image}
              description={item.instructions}
              buttonAction={handleAddToFavourites}
            />
          );
        })}
    </>
  );
};

export default Cocktails;
