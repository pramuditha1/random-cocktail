import * as React from "react";
import Tooltip from "@mui/material/Tooltip";
import Lable from "../Lable";
export interface ToolTipPropTypes {
  text: string;
  maxLimit?: number;
}

const TooltipCom: React.FC<ToolTipPropTypes> = ({ text, maxLimit = 60 }) => {
  const isLongText = text.length > maxLimit;
  const displayText = isLongText ? `${text.slice(0, maxLimit)}...` : text;

  return (
    <Tooltip title={text} disableHoverListener={!isLongText}>
      <div>
        <Lable text={displayText} color="textSecondary" variant="caption" />
      </div>
    </Tooltip>
  );
};

export default TooltipCom;
