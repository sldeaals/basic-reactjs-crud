import React, { memo, useMemo } from "react";
import { AlertPanel } from "../../components";
import { useProcedures } from "../../providers/ProceduresContext";
import { ProcedureActionMessages } from "../../utils/constants";
import { ActionsEnum, Alert } from "../../types";

const ProceduresAlertPanel: React.FC = memo(() => {
  const { actionProcedure, prevActionProcedure, error } = useProcedures();

  const alert = useMemo(() => {
    if (actionProcedure === ActionsEnum.NONE) {
      return null;
    }
    return {
      message:
        actionProcedure === ActionsEnum.ERROR
          ? error || ""
          : actionProcedure === ActionsEnum.SAVE
          ? ProcedureActionMessages[prevActionProcedure]
          : "",
      severity: actionProcedure === ActionsEnum.ERROR ? "error" : "info",
    } as Alert;
  }, [actionProcedure, error, prevActionProcedure]);

  return <AlertPanel alert={alert} />;
});

export default ProceduresAlertPanel;
