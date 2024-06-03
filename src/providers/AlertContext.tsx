import { createContext, useContext } from "react";
import { Alert, AlertSeverity } from "../types";

interface AlertContextType {
  alert: Alert | null;
  showAlert: (message: string, severity: AlertSeverity) => void;
  hideAlert: () => void;
}

const AlertContext = createContext<AlertContextType | undefined>(undefined);

export const useAlert = (): AlertContextType => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("useAlert must be used within an AlertProvider");
  }
  return context;
};

export default AlertContext;
