import * as React from "react";
import Button, { ButtonProps } from "@mui/material/Button";

export interface ButtonPropTypes {
  variant: ButtonProps["variant"];
  text: string;
  onClickHandler: ButtonProps["onClick"];
}

const ButtonComp: React.FC<ButtonPropTypes> = ({
  variant,
  text,
  onClickHandler,
}) => {
  return (
    <Button variant={variant} onClick={onClickHandler}>
      {text}
    </Button>
  );
};

export default ButtonComp;
