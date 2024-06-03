import React, { ReactNode, memo, useMemo } from "react";
import MuiTableContainer from "@mui/material/TableContainer";
import { useStyles } from "./styles";

interface TableContainerProps {
  className?: string;
  children: ReactNode;
}

const TableContainer: React.FC<TableContainerProps> = memo(
  ({ className, children }): JSX.Element => {
    const classes = useStyles();

    const parentClass = useMemo(
      () => `${classes.tableContainer} ${className || ""}`.trim(),
      [classes.tableContainer, className]
    );

    return (
      <MuiTableContainer className={parentClass}>{children}</MuiTableContainer>
    );
  }
);

export default TableContainer;
