import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { ButtonProps } from "@mui/material/Button";
import Lable from "../Lable";
import ButtonComp from "../Button";
import { localization } from "../../locale";

export interface ItemCardPropTypes {
  name: string;
  description: string;
  image: string;
  buttonAction: ButtonProps["onClick"];
}

const ItemCard: React.FC<ItemCardPropTypes> = ({
  name,
  description,
  image,
  buttonAction,
}) => {
  return (
    <Card sx={{ maxWidth: 250, margin: 2 }}>
      <CardMedia
        component="img"
        alt={`${name}-image`}
        height="140"
        image={image}
      />
      <CardContent>
        <Lable variant="h5" text={name} />
        <Lable variant="body2" color="text.secondary" text={description} />
      </CardContent>
      <CardActions>
        <ButtonComp
          variant="outlined"
          text={localization.addToFavourites}
          onClickHandler={buttonAction}
        />
      </CardActions>
    </Card>
  );
};

export default ItemCard;
