import Header from "./components/Header";
import Cocktails from "./containers/Cocktails";
import SearchCocktails from "./containers/SearchCocktails";

const App: React.FC = () => {
  return (
    <>
      <Header title="Cocktail App" />
      <SearchCocktails/>
      <Cocktails />
    </>
  );
};

export default App;
