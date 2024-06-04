import React, { memo, useState, useEffect, useCallback, useMemo } from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import { Alert as TAlert } from "../../types";
import { useStyles } from "./styles";

interface AlertPanelProps {
  className?: string;
  alert?: TAlert | null;
}

const AlertPanel: React.FC<AlertPanelProps> = memo(
  ({ alert: incomingAlert, className }) => {
    const [currentAlert, setCurrentAlert] = useState<TAlert | null>(null);
    const classes = useStyles();

    const parentClass = useMemo(
      () => `${classes.alertPanel} ${className || ""}`.trim(),
      [classes.alertPanel, className]
    );

    const handleClose = useCallback(() => {
      setCurrentAlert(null);
    }, []);

    useEffect(() => {
      if (currentAlert) {
        const timer = setTimeout(() => {
          setCurrentAlert(null);
        }, 5000);
        return () => clearTimeout(timer);
      }
    }, [currentAlert]);

    useEffect(() => {
      if (incomingAlert?.message) {
        setCurrentAlert(incomingAlert);
      }
    }, [incomingAlert]);

    return (
      <Box className={parentClass}>
        {currentAlert && (
          <Alert
            className={classes.alert}
            variant="filled"
            severity={currentAlert.severity}
            onClose={handleClose}
          >
            {currentAlert.message}
          </Alert>
        )}
      </Box>
    );
  }
);

export default AlertPanel;
