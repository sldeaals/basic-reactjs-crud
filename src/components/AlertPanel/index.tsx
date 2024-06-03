import React, {
  ReactNode,
  memo,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";
import MuiBox from "@mui/material/Box";
import MuiAlert from "@mui/material/Alert";
import { AlertSeverity } from "../../types";
import { useStyles } from "./styles";

interface AlertPanelProps {
  className?: string;
  children?: ReactNode;
  message: string;
  severity?: AlertSeverity;
  trigger: boolean;
  onClose: () => void;
}

const AlertPanel: React.FC<AlertPanelProps> = memo(
  ({ className, children, message, severity = "info", trigger, onClose }) => {
    const [showAlert, setShowAlert] = useState(false);
    const classes = useStyles();

    const parentClass = useMemo(
      () => `${classes.alertPanel} ${className || ""}`.trim(),
      [classes.alertPanel, className]
    );

    const handleAlertClose = useCallback(() => {
      setShowAlert(false);
    }, []);

    useEffect(() => {
      if (trigger) {
        setShowAlert(true);
        const timer = setTimeout(() => {
          onClose();
          setShowAlert(false);
        }, 5000);
        return () => clearTimeout(timer);
      }
    }, [trigger, onClose]);

    return (
      <MuiBox className={parentClass}>
        {children}
        {showAlert && message && (
          <MuiAlert
            className={classes.alert}
            variant="filled"
            severity={severity}
            onClose={handleAlertClose}
          >
            {message}
          </MuiAlert>
        )}
      </MuiBox>
    );
  }
);

export default AlertPanel;
