import React from "react";

import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";

function MyButton({ children, onClick, tip, btnClassName, sx }) {
  return (
    <Tooltip title={tip}>
      <IconButton onClick={onClick} className={btnClassName} sx={sx}>
        {children}
      </IconButton>
    </Tooltip>
  );
}

export default MyButton;
