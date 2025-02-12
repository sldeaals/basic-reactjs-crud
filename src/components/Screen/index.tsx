import React, { ReactNode, memo, useMemo } from "react";
import LayoutFrame from "../LayoutFrame";

export interface ScreenProps {
  className?: string;
  header?: ReactNode;
  body: ReactNode;
  footer?: ReactNode;
}

const Screen: React.FC<ScreenProps> = memo(
  ({ className, header, body, footer }) => {
    const parentClass = useMemo(() => `${className || ""}`.trim(), [className]);

    return (
      <LayoutFrame className={parentClass}>
        {header}
        {body}
        {footer}
      </LayoutFrame>
    );
  }
);

export default Screen;
