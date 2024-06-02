import React, { ReactNode, memo, useMemo } from "react";
import AppBar from "@material-ui/core/AppBar";
import { useStyles } from "./styles";

export interface FooterProps {
  className?: string;
  children: ReactNode;
}

const Footer: React.FC<FooterProps> = memo(({ className, children }) => {
  const classes = useStyles();

  const parentClass = useMemo(
    () => `${classes.appBar} ${className || ""}`.trim(),
    [classes.appBar, className]
  );

  return (
    <AppBar className={parentClass} position="sticky">
      {children}
    </AppBar>
  );
});

export default Footer;
