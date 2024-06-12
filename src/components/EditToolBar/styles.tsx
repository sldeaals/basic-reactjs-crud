import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  topToolBar: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: "12px",
    padding: "var(--padding-xl) var(--padding-xxl)",
    "@media (max-width: 480px)": {
      flexDirection: "column-reverse",
      gap: "var(--gap-medium)",
      padding: "var(--padding-large) 0px",
    },
  },
  actionButton: {
    "@media (max-width: 480px)": {
      width: "100%",
    },
  },
  buttonLabel: {
    textTransform: "none",
  },
});
