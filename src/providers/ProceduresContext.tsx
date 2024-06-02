import { createContext, useContext } from "react";
import { Procedures, ActionsEnum } from "../types";

interface ProceduresContextType {
  proceduresData: Procedures[] | null;
  procedures: Procedures[];
  actionProcedure: ActionsEnum;
  prevActionProcedure: ActionsEnum;
  isLoading: boolean;
  error: string | null;
  addProcedure: (newRecord: Procedures) => void;
  fetchProcedures: () => void;
  updateProcedure: (id: string | number, updatedRecord: Procedures) => void;
  deleteProcedure: (id: string | number) => void;
  saveProcedureChanges: (records: Procedures[]) => void;
  cancelProcedureChanges: () => void;
  updateActionProcedure: (action: ActionsEnum) => void;
}

const ProceduresContext = createContext<ProceduresContextType | undefined>(
  undefined
);

export const useProcedures = () => {
  const context = useContext(ProceduresContext);
  if (!context) {
    throw new Error("useProcedures must be used within a ProceduresProvider");
  }
  return context;
};

export default ProceduresContext;
