import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import {
  fetchCocktail,
  searchCocktailsByName,
} from "../store/reducers/cocktailSlice";
import ButtonComp from "../components/Button";
import { localization } from "../locale";
import TextBoxComp from "../components/TextBoxComp";

const SearchCocktails: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [searchName, setSearchName] = useState<string | null>("");

  const handleOnSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchName(e.target.value);
  };

  useEffect(() => {
    let delay: any;
    if (searchName) {
      delay = setTimeout(
        () => dispatch(searchCocktailsByName(searchName)),
        1000
      );
    }
    return () => {
      clearTimeout(delay);
    };
  }, [searchName, dispatch]);

  const handleRefresh = async () => {
    setSearchName("");
    dispatch(fetchCocktail());
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-around bg-white p-6 rounded-lg shadow-lg border border-gray-200 space-y-4 sm:space-y-0 sm:space-x-4 max-w-xl mx-auto mt-4">
      <ButtonComp
        variant="contained"
        text={localization.getAnotherFive}
        onClickHandler={handleRefresh}
      />
      <TextBoxComp
        handleOnChange={handleOnSearch}
        value={searchName}
        label="Search by name"
      />
    </div>
  );
};

export default SearchCocktails;
