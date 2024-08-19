import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Lable from "../Lable";
import ButtonComp from "../Button";
import { localization } from "../../locale";
import TooltipCom from "../TooltipCom";
import { CocktailState } from "../../store/reducers/cocktailSlice";

export interface ItemCardPropTypes {
  name: string;
  description: string;
  image: string;
  addToCartHandler: (item: CocktailState) => void;
  className?: string;
}

const ItemCard: React.FC<ItemCardPropTypes> = ({
  name,
  description,
  image,
  addToCartHandler,
  className,
}) => {
  return (
    <Card
      className={className}
      sx={{
        maxWidth: 250,
        margin: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardMedia
        component="img"
        alt={`${name}-image`}
        height="140"
        image={image}
      />
      <CardContent>
        <Lable variant="h5" text={name} />
        <TooltipCom text={description} />
      </CardContent>
      <CardActions>
        <ButtonComp
          variant="outlined"
          text={localization.addToFavourites}
          onClickHandler={addToCartHandler}
        />
      </CardActions>
    </Card>
  );
};

export default ItemCard;
