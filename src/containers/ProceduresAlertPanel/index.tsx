import React, { memo } from "react";
import { AlertPanel } from "../../components";
import { useAlert } from "../../providers/AlertContext";

const ProceduresAlertPanel: React.FC = memo(() => {
  const { alert } = useAlert();
  console.log("ProceduresAlertPanel", alert);

  return <AlertPanel alert={alert} />;
});

export default ProceduresAlertPanel;
