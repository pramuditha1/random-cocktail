import React from "react";
import ButtonComp from "../Button";
import { localization } from "../../locale";
import FavouriteItems from "../../containers/FavouriteItems";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { makeSelectTotalFavouritesCount } from "../../store/selectors";
export interface HeaderPropTypes {
  title: string;
}
const Header: React.FC<HeaderPropTypes> = ({ title }) => {
  const [open, setOpen] = React.useState(false);
  const count = useSelector(makeSelectTotalFavouritesCount);
  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="text-lg font-bold">{title}</div>
      <ButtonComp
        variant="contained"
        startIcon={<ShoppingCartIcon />}
        text={`${localization.favouriteButton} : ${count}`}
        onClickHandler={() => setOpen(true)}
      />
      {/* FavouriteItems modal will open upon button click */}
      <FavouriteItems open={open} setOpen={setOpen} />
    </header>
  );
};

export default Header;
