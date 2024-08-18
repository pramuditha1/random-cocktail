import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { fetchCocktail } from "../store/reducers/cocktailSlice";
import ButtonComp from "../components/Button";
import { localization } from "../locale";

const SearchCocktails: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleRefresh = async () => {
    dispatch(fetchCocktail());
  };

  return (
    <div>
      <ButtonComp
        variant="outlined"
        text={localization.getAnotherFive}
        onClickHandler={handleRefresh}
      />
    </div>
  );
};

export default SearchCocktails;
