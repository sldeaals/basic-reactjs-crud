import { v4 as uuidv4 } from "uuid";
import { Procedures, RecordFromObject } from "../types";

export function createRecordFromObject<T extends object>(
  obj: T
): RecordFromObject<T> {
  const result: Partial<RecordFromObject<T>> = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = obj[key];
    }
  }
  return result as RecordFromObject<T>;
}

export function createRecordFromInterface<T extends object>(): RecordFromObject<T> {
  return {} as RecordFromObject<T>;
}

export function createProcedureData(
  id: string,
  procedure: string,
  code: string,
  claimed: string,
  difference: string,
  authorized: string
): Procedures {
  return { id: id || uuidv4(), procedure, code, claimed, difference, authorized };
}

export const isEmptyProcedure = (record: Procedures): boolean => {
  return !record.procedure || !record.code || !record.claimed || record.procedure.trim() === "" || record.code.trim() === "" || record.claimed.trim() === "";
};
