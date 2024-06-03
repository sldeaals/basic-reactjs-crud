import React, { useCallback, useMemo, memo } from "react";
import { useProcedures } from "../../providers/ProceduresContext";
import { ActionsEnum } from "../../types";
import { ProcedureActionMessages } from "../../utils/constants";
import AlertPanel from "../../components/AlertPanel";

const ProceduresAlertPanel: React.FC = memo(() => {
  const { actionProcedure, updateActionProcedure, error } = useProcedures();

  const handleAlertClose = useCallback(() => {
    updateActionProcedure(ActionsEnum.NONE);
  }, [updateActionProcedure]);

  const message = useMemo(
    () =>
      error && actionProcedure === ActionsEnum.ERROR
        ? error
        : ProcedureActionMessages[actionProcedure],
    [error, actionProcedure]
  );
  const severity = useMemo(
    () => (error && actionProcedure === ActionsEnum.ERROR ? "error" : "info"),
    [error, actionProcedure]
  );

  return (
    <AlertPanel
      message={message}
      severity={severity}
      trigger={actionProcedure !== ActionsEnum.NONE}
      onClose={handleAlertClose}
    />
  );
});

export default ProceduresAlertPanel;
