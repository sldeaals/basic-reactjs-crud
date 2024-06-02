import React, { ReactNode, memo, useMemo } from "react";
import { useStyles } from "./styles";

export interface LayoutFrameProps {
  className?: string;
  children?: ReactNode;
}

const LayoutFrame: React.FC<LayoutFrameProps> = memo(
  ({ className, children }) => {
    const classes = useStyles();

    const parentClass = useMemo(
      () => `${classes.layoutFrame} ${className || ""}`.trim(),
      [classes.layoutFrame, className]
    );

    return <div className={parentClass}>{children}</div>;
  }
);

export default LayoutFrame;
