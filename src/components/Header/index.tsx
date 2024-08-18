import React from "react";
import ButtonComp from "../Button";
import { localization } from "../../locale";

interface PropTypes {
  title: string;
}
const Header: React.FC<PropTypes> = ({ title }) => {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="text-lg font-bold">{title}</div>
      <ButtonComp
        variant="contained"
        text={localization.favouriteButton}
        onClickHandler={() => {}}
      />
    </header>
  );
};

export default Header;
