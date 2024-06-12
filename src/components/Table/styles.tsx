import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  tableBody: {
    "& > :not(:last-child)": {
      borderBottom: "var(--gap-medium) solid var(--main-backgground)",
    },
    "@media (max-width: 480px)": {
      display: "flex",
      flexDirection: "column",
    },
  },
  tableRow: {
    borderRadius: "var(--border-radius)",
    overflow: "hidden",
    backgroundColor: "#fff",
    "@media (max-width: 480px)": {
      display: "flex",
      flexDirection: "column",
    },
  },
  tableCell: {
    "&.MuiTableCell-root": {
      "@media (max-width: 480px)": {
        border: "none",
        padding: "var(--padding-small) var(--padding-medium)",
      },
    },
  },
  tableCellTitle: {
    color: "gray",
    fontWeight: 600,
  },
  tableCellTextValue: {
    fontWeight: 600,
  },
});
