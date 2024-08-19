import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { ButtonProps } from "@mui/material/Button";
import Lable from "../Lable";
import ButtonComp from "../Button";
import TextBoxComp from "../TextBoxComp";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export interface FavouriteListItemPropTypes {
  name: string;
  description?: string;
  image: string;
  addItem: ButtonProps["onClick"];
  removeItem: ButtonProps["onClick"];
  className?: string;
}

const FavouriteListItem: React.FC<FavouriteListItemPropTypes> = ({
  name,
  image,
  addItem,
  removeItem,
  className,
}) => {
  return (
    <Card
      className={`flex items-center border border-gray-200 p-3 space-x-4 ${className}`}
      sx={{ minWdth: 500, margin: 0.5 }}
    >
      <CardMedia
        component="img"
        alt={`${name}-image`}
        className="w-24 h-24 object-cover rounded"
        image={image}
      />
      <div className="flex flex-col items-center w-full space-y-1">
        <Lable variant="h6" text={name} styles={{ justifyContent: "center" }} />
        <div className="flex items-center space-x-2">
          <ButtonComp
            variant="outlined"
            startIcon={<AddIcon />}
            onClickHandler={addItem}
            style={{ padding: "5px 1px 5px 10px" }}
            className="p-1 w-2"
          />
          <TextBoxComp
            className="text-center w-14"
            label=""
            type="number"
            handleOnChange={() => {}}
          />
          <ButtonComp
            variant="outlined"
            startIcon={<RemoveIcon />}
            onClickHandler={removeItem}
            style={{ padding: "5px 1px 5px 10px" }}
            className="p-1"
          />
        </div>
      </div>
    </Card>
  );
};

export default FavouriteListItem;
