import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store/store";
import { makeSelectCocktails } from "../store/selectors";
import { fetchCocktail } from "../store/reducers/cocktailSlice";
import { useEffect } from "react";
import ItemCard from "../components/ItemCard";
import Lable from "../components/Lable";

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
    <div className="container mx-auto px-4 py-8">
      {/* <div className="flex justify-center"> */}
        <Lable text="Cocktails" variant="h4" className="flex justify-center" />
      {/* </div> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cocktails &&
          cocktails.map((item, key) => (
            <ItemCard
              key={key}
              name={item.name}
              image={item.image}
              description={item.instructions}
              buttonAction={handleAddToFavourites}
              // className="w-full"
            />
          ))}
      </div>
    </div>
  );
};

export default Cocktails;
