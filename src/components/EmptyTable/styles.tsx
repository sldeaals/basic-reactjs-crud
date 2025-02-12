import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  wrapperBox: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "var(--padding-xl)",
  },
  svgGroup: {
    width: "134px",
    height: "134px",
  },
  buttonLabel: {
    textTransform: "none",
  },
});
