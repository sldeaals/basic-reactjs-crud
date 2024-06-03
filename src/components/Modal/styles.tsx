import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  headerContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#edf3f1",
    color: "#000000",
    boxShadow: "none",
    fontWeight: 600,
  },
  topToolBar: {
    height: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: "16px",
    "@media (max-width: 480px)": {
      padding: "8px 16px;",
    },
  },
  customDialogActions: {
    "&.MuiDialogActions-root": {
      padding: "0 24px",
      "@media (max-width: 480px)": {
        padding: "0 16px",
      },
    },
  },
  dialogTitle: {
    "@media (max-width: 480px)": {
      display: "none",
    },
  },
  dialogContent: {
    "&.MuiDialogContent-root": {
      "@media (max-width: 480px)": {
        padding: "0 0 16px 0",
      },
    },
  },
  closeButton: {
    "&.MuiButtonBase-root.MuiButton-root": {
      minWidth: "36px",
    },
  },
  mobileTitle: {
    "&.MuiTypography-root": {
      fontWeight: 500,
      fontSize: "1.25rem",
      lineHeight: "1.6",
      letterSpacing: "0.0075em",
    },
    display: "none",
    width: "100%",
    textTransform: "none",
    "@media (max-width: 480px)": {
      display: "block",
    },
  },
});
