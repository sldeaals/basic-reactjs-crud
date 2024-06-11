import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  alertPanel: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: "var(--gap-medium)",
  },
  alert: {
    minWidth: "64px",
    zIndex: 2999,
  },
});
