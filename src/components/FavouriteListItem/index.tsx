import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Lable from "../Lable";
import ButtonComp from "../Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
export interface FavouriteListItemPropTypes {
  name: string;
  quantity: number;
  description?: string;
  image: string;
  addItem: () => void;
  removeItem: () => void;
  className?: string;
}

const FavouriteListItem: React.FC<FavouriteListItemPropTypes> = ({
  name,
  quantity = 1,
  image,
  addItem,
  removeItem,
  className,
}) => {
  return (
    <Card
      className={`flex items-center border border-gray-200 p-3 space-x-4  overflow-y-auto ${className}`}
      sx={{ minWdth: 500, minHeight: 100, margin: 0.5 }}
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
          />
          <Lable
            variant="body1"
            text={quantity.toString()}
            styles={{ justifyContent: "center" }}
          />
          <ButtonComp
            variant="outlined"
            startIcon={<RemoveIcon />}
            onClickHandler={removeItem}
            style={{ padding: "5px 1px 5px 10px" }}
          />
        </div>
      </div>
    </Card>
  );
};

export default FavouriteListItem;
