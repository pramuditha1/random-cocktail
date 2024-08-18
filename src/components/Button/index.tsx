import * as React from "react";
import Button, { ButtonProps } from "@mui/material/Button";

interface PropTypes {
  variant: ButtonProps["variant"];
  text: string;
  onClickHandler: ButtonProps["onClick"];
}

const ButtonComp: React.FC<PropTypes> = ({ variant, text, onClickHandler }) => {
  return (
    <Button variant={variant} onClick={onClickHandler}>
      {text}
    </Button>
  );
};

export default ButtonComp;
