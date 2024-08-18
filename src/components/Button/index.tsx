import * as React from "react";
import Button, { ButtonProps } from "@mui/material/Button";

export interface ButtonPropTypes {
  variant: ButtonProps["variant"];
  text: string;
  onClickHandler: ButtonProps["onClick"];
  className?: string;
}

const ButtonComp: React.FC<ButtonPropTypes> = ({
  variant,
  text,
  onClickHandler,
  ...props
}) => {
  return (
    <Button variant={variant} onClick={onClickHandler} {...props}>
      {text}
    </Button>
  );
};

export default ButtonComp;
