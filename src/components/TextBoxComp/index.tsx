import React from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";

export interface TextBoxCompPropTypes {
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | null | "";
  label: string;
  type?: TextFieldProps["type"];
  className?: string;
  styles?: React.CSSProperties;
}

const TextBoxComp: React.FC<TextBoxCompPropTypes> = ({
  handleOnChange,
  value = "",
  label,
  type = "text",
  styles,
  ...props
}) => {
  return (
    <TextField
      label={label}
      size="small"
      type={type}
      onChange={handleOnChange}
      value={value}
      sx={{...styles}}
      {...props}
    />
  );
};

export default TextBoxComp;
