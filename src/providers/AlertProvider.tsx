import { useState, useCallback, ReactNode, FC, useMemo } from "react";
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

  const value = useMemo(
    () => ({
      alert,
      showAlert,
      hideAlert,
    }),
    [alert, showAlert, hideAlert]
  );

  return (
    <AlertContext.Provider value={value}>{children}</AlertContext.Provider>
  );
};

export default AlertProvider;
