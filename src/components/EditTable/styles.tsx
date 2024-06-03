import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  tableBody: {
    "& > :not(:last-child)": {
      borderBottom: "var(--gap-large) solid transparent",
    },
  },
  tableRow: {
    borderRadius: "var(--border-radius)",
    overflow: "hidden",
    backgroundColor: "transparent",
    "@media (max-width: 768px)": {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  tableCell: {
    border: "none",
    "@media (max-width: 768px)": {
      width: "100%",
      padding: "8px 12px",
    },
  },
  deleteButton: {
    "&.MuiButtonBase-root.MuiButton-root": {
      marginTop: "22px",
      "@media (max-width: 768px)": {
        minWidth: "24px",
        padding: "0",
        marginTop: "0",
      },
    },
  },
});
