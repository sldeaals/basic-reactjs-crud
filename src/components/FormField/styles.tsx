import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  inputLabel: {
    textTransform: "capitalize",
  },
  textField: {
    background: "var(--text-field-color)",
    borderRadius: "var(--border-radius)",
    "@media (max-width: 768px)": {
      width: "-webkit-fill-available",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "var(--border-solid) solid var(--border-fieldset-color)",
      },
    },
  },
});
