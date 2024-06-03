import React, { memo, useEffect, useCallback, useMemo } from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import { useAlert } from "../../providers/AlertContext";
import { useStyles } from "./styles";

interface AlertPanelProps {
  className?: string;
}

const AlertPanel: React.FC<AlertPanelProps> = memo(({ className }) => {
  const { alert, hideAlert } = useAlert();
  const classes = useStyles();

  const parentClass = useMemo(
    () => `${classes.alertPanel} ${className || ""}`.trim(),
    [classes.alertPanel, className]
  );

  const handleClose = useCallback(() => {
    hideAlert();
  }, [hideAlert]);

  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => {
        hideAlert();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [alert, hideAlert]);

  return (
    <Box className={parentClass}>
      {alert && (
        <Alert
          className={classes.alert}
          variant="filled"
          severity={alert?.severity}
          onClose={handleClose}
        >
          {alert?.message}
        </Alert>
      )}
    </Box>
  );
});

export default AlertPanel;
