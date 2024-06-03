import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  tableContainer: {
    maxHeight: "80vh",
    "@media (max-height: 800px)": {
      maxHeight: "74vh",
    },
    "@media (max-height: 600px)": {
      maxHeight: "70vh",
    },
  },
});
