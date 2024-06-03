import React, { ReactNode, memo } from "react";
import AlertProvider from "./AlertProvider";
import ProceduresProvider from "./ProceduresProvider";

interface StoreProviderProps {
  children: ReactNode;
}

const StoreProvider: React.FC<StoreProviderProps> = memo(({ children }) => {
  return (
    <AlertProvider>
      <ProceduresProvider>{children}</ProceduresProvider>
    </AlertProvider>
  );
});

export default StoreProvider;
