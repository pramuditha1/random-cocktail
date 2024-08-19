import * as React from "react";
import Button, { ButtonProps } from "@mui/material/Button";

export interface ButtonPropTypes {
  variant: ButtonProps["variant"];
  text?: string;
  onClickHandler: (item?: any) => void;
  color?: ButtonProps["color"];
  startIcon?: ButtonProps["startIcon"];
  className?: string;
  style?: React.CSSProperties
}

const ButtonComp: React.FC<ButtonPropTypes> = ({
  variant,
  text,
  onClickHandler,
  style,
  ...props
}) => {
  return (
    <Button variant={variant} onClick={onClickHandler} {...props} sx={{...style}}>
      {text}
    </Button>
  );
};

export default ButtonComp;
