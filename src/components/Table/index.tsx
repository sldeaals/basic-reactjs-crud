import React, { useCallback, memo, useMemo } from "react";
import MuiTable from "@material-ui/core/Table";
import MuiTableBody from "@material-ui/core/TableBody";
import MuiTableRow from "@material-ui/core/TableRow";
import MuiTableCell from "@material-ui/core/TableCell";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./styles";

interface TableProps {
  className?: string;
  data: Record<string, any>[] | undefined;
}

const Table: React.FC<TableProps> = memo(({ className, data }) => {
  const classes = useStyles();

  const parentClass = useMemo(() => `${className || ""}`.trim(), [className]);

  const renderTableCells = useCallback(
    (row: Record<string, any>) => {
      return Object.keys(row).map((field) => {
        if (field === "id") return null;
        return (
          <MuiTableCell className={classes.tableCell} align="left" key={field} role="cell">
            <Typography className={classes.tableCellTitle} role="columnheader">{field}</Typography>
            <Typography className={classes.tableCellTextValue}>
              {row[field]}
            </Typography>
          </MuiTableCell>
        );
      });
    },
    [classes]
  );

  return (
    <MuiTable className={parentClass} aria-label="data table" role="table">
      <MuiTableBody className={classes.tableBody} role="rowgroup">
        {data?.map((row) => (
          <MuiTableRow className={classes.tableRow} key={row.id} role="row">
            {renderTableCells(row)}
          </MuiTableRow>
        ))}
      </MuiTableBody>
    </MuiTable>
  );
});

export default Table;
