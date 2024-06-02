import { ActionsEnum } from "../types";

export const ProcedureActionMessages = {
  [ActionsEnum.POST]: "Procedure added",
  [ActionsEnum.PUT]: "Procedure updated",
  [ActionsEnum.DELETE]: "Procedure removed",
  [ActionsEnum.SAVE]: "Procedures changes saved",
  [ActionsEnum.ERROR]: "Error",
  [ActionsEnum.NONE]: "",
};
