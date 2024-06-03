import React, { useCallback, memo, useMemo } from "react";
import { TextField, InputLabel, Box } from "@mui/material";
import { useStyles } from "./styles";

interface FormFieldProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  label: string;
  value?: any;
  placeholder?: string;
}

const FormField: React.FC<FormFieldProps> = memo(
  ({ onChange, className, label, value, placeholder = "Ej: 4563523" }) => {
    const classes = useStyles();

    const parentClass = useMemo(() => `${className || ""}`.trim(), [className]);

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e);
      },
      [onChange]
    );

    return (
      <Box className={parentClass}>
        <InputLabel className={classes.inputLabel}>{label}</InputLabel>
        <TextField
          className={`${classes.textField} ${className || ""}`.trim()}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
        />
      </Box>
    );
  }
);

export default FormField;
