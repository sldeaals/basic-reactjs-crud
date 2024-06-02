import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  inputLabel: {
    textTransform: "capitalize",
  },
  textField: {
    background: "#F6F6FB",
    borderRadius: "5px",
    "@media (max-width: 768px)": {
      width: "-webkit-fill-available",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "2px solid #9CBEB3",
      },
    },
  },
});
