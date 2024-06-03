import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  topToolBar: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: "12px",
    padding: "20px 24px",
    "@media (max-width: 480px)": {
      flexDirection: "column-reverse",
      gap: "12px",
      padding: "16px 0px",
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
