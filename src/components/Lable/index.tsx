import { Typography, TypographyProps } from "@mui/material";
import React from "react";

// Exporting the LablePropTypes interface
export interface LablePropTypes {
  text: string;
  variant: TypographyProps["variant"];
  component?: TypographyProps["component"];
  color?: TypographyProps["color"];
  className?: string;
  styles?: React.CSSProperties;
}

const Lable: React.FC<LablePropTypes> = ({
  text,
  variant = "body1",
  component = "div",
  color = "textPrimary",
  styles,
  ...props
}) => {
  return (
    <Typography
      gutterBottom
      variant={variant}
      component={component}
      color={color}
      sx={{...styles}}
      {...props}
    >
      {text}
    </Typography>
  );
};

export default Lable;
