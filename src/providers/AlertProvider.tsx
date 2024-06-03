import { useState, useCallback, ReactNode, FC } from "react";
import { Alert, AlertSeverity } from "../types";
import AlertContext from "./AlertContext";

const AlertProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [alert, setAlert] = useState<Alert | null>(null);

  const showAlert = useCallback((message: string, severity: AlertSeverity) => {
    if (message) {
      setAlert({ message, severity });
    }
  }, []);

  const hideAlert = useCallback(() => {
    setAlert(null);
  }, []);

  return (
    <AlertContext.Provider value={{ alert, showAlert, hideAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertProvider;
