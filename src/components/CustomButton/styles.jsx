import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  customButton: {
    '@media (max-width: 480px)': {
      width: '100%',
    },
  },
  buttonLabel: {
    textTransform: "none",
  },
});
