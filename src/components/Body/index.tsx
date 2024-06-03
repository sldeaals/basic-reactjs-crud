import React, { ReactNode, useMemo } from "react";
import Container from "@mui/material/Container";
import { useStyles } from "./styles";

export interface BodyProps {
  className?: string;
  children: NonNullable<ReactNode>;
}

const Body: React.FC<BodyProps> = ({ className, children }) => {
  const classes = useStyles();

  const parentClass = useMemo(
    () => `${classes.body} ${className || ""}`.trim(),
    [classes.body, className]
  );

  return (
    <Container className={parentClass} maxWidth="xl">
      {children}
    </Container>
  );
};

export default Body;
