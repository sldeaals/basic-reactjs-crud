import { Procedures } from "./Procedures";

export type AlertSeverity = "error" | "warning" | "info" | "success";

export interface Alert {
  message: string;
  severity: AlertSeverity;
}

export type ValueOf<T> = T[keyof T];
export type RecordFromObject<T extends object> = Record<keyof T, ValueOf<T>>;

export enum ActionsEnum {
  POST = "post",
  PUT = "put",
  DELETE = "delete",
  SAVE = "save",
  ERROR = "error",
  NONE = "none",
}

export interface RowData {
  [key: string]: string;
}

export interface ModalProps {
  onClose: () => void;
  open: boolean;
  className?: string;
}

export type { Procedures };
