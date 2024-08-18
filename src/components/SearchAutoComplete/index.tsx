import React from "react";
import TextField from "@mui/material/TextField";

export interface TextBoxCompPropTypes {
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | null | "";
  label: string;
}

const TextBoxComp: React.FC<TextBoxCompPropTypes> = ({
  handleOnChange,
  value = "",
  label
}) => {
  return (
    <TextField label={label} size="small" onChange={handleOnChange} value={value} />
  );
};

export default TextBoxComp;
