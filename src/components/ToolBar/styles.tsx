import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  toolbar: {
    fontWeight: 600,
    backgroundColor: "transparent",
    padding: 0,
    "@media (max-width: 480px)": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "var(--gap-medium)",
    },
  },
});
