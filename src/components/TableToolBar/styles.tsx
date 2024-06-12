import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  tableToolBar: {
    backgroundColor: "inherit",
  },
  title: {
    "&.MuiTypography-root": { 
      color: "var(--text-base)",
    },
  },
});
