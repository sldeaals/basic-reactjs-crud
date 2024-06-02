import React, { ReactNode, useMemo } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useStyles } from "./styles";

interface CustomButtonProps {
  onClick: () => void;
  className?: string;
  label: string;
  startIcon: ReactNode;
  variant?: "contained" | "outlined" | "text";
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onClick,
  className,
  label,
  startIcon,
  variant = "contained",
  disabled = false,
}) => {
  const classes = useStyles();

  const parentClass = useMemo(
    () => `${classes.customButton} ${className || ""}`.trim(),
    [classes.customButton, className]
  );

  return (
    <Button
      className={parentClass}
      variant={variant}
      startIcon={startIcon}
      onClick={onClick}
      disabled={disabled}
    >
      <Typography className={classes.buttonLabel}>{label}</Typography>
    </Button>
  );
};

export default CustomButton;
