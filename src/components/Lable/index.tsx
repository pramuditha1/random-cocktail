import { Typography, TypographyProps } from "@mui/material";
import React from "react";

// Exporting the LablePropTypes interface
export interface LablePropTypes {
  text: string;
  variant: TypographyProps["variant"];
  component?: TypographyProps["component"];
  color?: TypographyProps["color"];
  className?: string;
}

const Lable: React.FC<LablePropTypes> = ({
  text,
  variant = "body1",
  component = "div",
  color = "textPrimary",
  ...props
}) => {
  return (
    <Typography
      gutterBottom
      variant={variant}
      component={component}
      color={color}
      {...props}
    >
      {text}
    </Typography>
  );
};

export default Lable;
