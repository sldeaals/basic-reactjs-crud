import React, { useCallback, useMemo, memo } from "react";
import { Table as MuiTable } from "@mui/material";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { Button } from "@mui/material";
import Delete from "@mui/icons-material/Delete";
import FormFieldCell from "../FormFieldCell";
import { useStyles } from "./styles";

interface EditTableProps {
  className?: string;
  data: Record<string, any>[] | undefined;
  onUpdateRow: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    field: string
  ) => void;
  onDeleteRow: (index: number, record: Record<string, any>) => void;
}

const EditTable: React.FC<EditTableProps> = memo(
  ({ className, data, onUpdateRow, onDeleteRow }): JSX.Element => {
    const classes = useStyles();

    const parentClass = useMemo(() => `${className || ""}`.trim(), [className]);

    const handleUpdateRow = useCallback(
      (
        e: React.ChangeEvent<HTMLInputElement>,
        index: number,
        field: string
      ) => {
        onUpdateRow(e, index, field);
      },
      [onUpdateRow]
    );

    const handleDeleteRow = useCallback(
      (index: number, record: Record<string, any>) => {
        onDeleteRow(index, record);
      },
      [onDeleteRow]
    );

    const tableRows = useMemo(() => {
      return data?.map((row, index) => (
        <TableRow className={classes.tableRow} key={row.id || index}>
          <TableCell className={classes.tableCell} align="left">
            <Button
              className={classes.deleteButton}
              onClick={() => handleDeleteRow(index, row)}
            >
              <Delete />
            </Button>
          </TableCell>
          {Object.keys(row).map((field) => {
            if (field === "id") return null;
            return (
              <FormFieldCell
                key={field}
                className={classes.tableCell}
                label={field}
                value={row[field]}
                onChange={(e) => handleUpdateRow(e, index, field)}
              />
            );
          })}
        </TableRow>
      ));
    }, [data, classes, handleUpdateRow, handleDeleteRow]);

    return (
      <MuiTable className={parentClass} aria-label="simple table">
        <TableBody className={classes.tableBody}>{tableRows}</TableBody>
      </MuiTable>
    );
  }
);

export default EditTable;
