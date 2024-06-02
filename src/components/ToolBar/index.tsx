import React, { ReactNode, memo, useMemo } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import { useStyles } from "./styles";

interface ToolBarProps {
  className?: string;
  children: ReactNode;
}

const ToolBar: React.FC<ToolBarProps> = memo(({ className, children }) => {
  const classes = useStyles();

  const parentClass = useMemo(
    () => `${classes.toolbar} ${className || ""}`.trim(),
    [classes.toolbar, className]
  );

  return <Toolbar className={parentClass}>{children}</Toolbar>;
});

export default ToolBar;
