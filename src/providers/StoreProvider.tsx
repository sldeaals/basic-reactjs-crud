import React, { ReactNode, memo } from "react";
import ProceduresProvider from "./ProceduresProvider";

interface StoreProviderProps {
  children: ReactNode;
}

const StoreProvider: React.FC<StoreProviderProps> = memo(({ children }) => {
  return <ProceduresProvider>{children}</ProceduresProvider>;
});

export default StoreProvider;
