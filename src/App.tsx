import { useEffect } from "react";
import Header from "./components/Header";
import Cocktails from "./containers/Cocktails";
import { useDispatch, useSelector } from "react-redux";
import { fetchCocktail } from "./store/reducers/cocktailSlice";
import { AppDispatch } from "./store/store";
import { makeSelectCocktails } from "./store/selectors";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const cocktails = useSelector(makeSelectCocktails);
  useEffect(() => {
    dispatch(fetchCocktail());
  }, [dispatch]);
  console.log(cocktails);
  const handleRefresh = async () => {
    dispatch(fetchCocktail());
  };
  return (
    <>
      <Header title="Cocktail App" />
      <Cocktails />
      <button onClick={handleRefresh}>Refresh</button>
    </>
  );
}

export default App;
