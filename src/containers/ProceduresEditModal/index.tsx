import React, { useState, useEffect, useCallback, memo } from "react";
import Box from "@mui/material/Box";
import Modal from "../../components/Modal";
import CustomButton from "../../components/CustomButton";
import EditToolBar from "../../components/EditToolBar";
import Add from "@mui/icons-material/Add";
import EditTable from "../../components/EditTable";
import { useProcedures } from "../../providers/ProceduresContext";
import { ModalProps as BaseModalProps, Procedures } from "../../types";
import { createProcedureData, isEmptyProcedure } from "../../utils";
import { ActionsEnum } from "../../types";
import { ProcedureActionMessages } from "../../utils/constants";
import { useAlert } from "../../providers/AlertContext";

interface ProceduresEditModalProps extends BaseModalProps {
  onCancel: () => void;
  onSave: () => void;
  action: ActionsEnum;
}

const ProceduresEditModal: React.FC<ProceduresEditModalProps> = memo(
  ({ onClose, onCancel, onSave, open, action = ActionsEnum.NONE }) => {
    const { procedures, saveProcedureChanges } = useProcedures();
    const { showAlert } = useAlert();
    const [tableRows, setTableRows] = useState<Procedures[]>(
      procedures?.length <= 0
        ? [createProcedureData("", "", "", "", "", "")]
        : procedures
    );

    const handleAddRow = useCallback(() => {
      setTableRows((prevRows) => {
        const lastRow = prevRows[prevRows.length - 1];
        return isEmptyProcedure(lastRow)
          ? prevRows
          : [...prevRows, createProcedureData("", "", "", "", "", "")];
      });
    }, []);

    const handleDeleteRow = useCallback(
      (index: number, record: Record<string, any>) => {
        setTableRows((prevTableRows) => {
          if (prevTableRows.length === 1) {
            return [createProcedureData("", "", "", "", "", "")];
          }

          if (record.id) {
            return prevTableRows.filter((row) => row.id !== record.id);
          }

          const updatedData = [...prevTableRows];
          updatedData.splice(index, 1);
          return updatedData;
        });
      },
      []
    );

    const handleUpdateRow = useCallback(
      (
        e: React.ChangeEvent<HTMLInputElement>,
        index: number,
        field: string
      ) => {
        const value = e.target.value;
        setTableRows((prevProcedures) => {
          const updatedData = [...prevProcedures];
          updatedData[index] = {
            ...updatedData[index],
            [field]: value,
          };
          return updatedData;
        });
      },
      []
    );

    const handleSave = useCallback(async () => {
      const filteredRows = tableRows.filter(
        (row) => row.procedure.trim() !== "" && row.code.trim() !== ""
      );

      await saveProcedureChanges(filteredRows);

      if (!filteredRows.length) {
        showAlert(ProcedureActionMessages[ActionsEnum.DELETE], "warning");
      } else {
        showAlert(ProcedureActionMessages[action], "info");
      }

      onSave();
    }, [tableRows, action, saveProcedureChanges, showAlert, onSave]);

    useEffect(() => {
      if (procedures?.length <= 0) {
        setTableRows([createProcedureData("", "", "", "", "", "")]);
      } else {
        setTableRows(procedures);
      }
    }, [procedures]);

    return (
      <Modal
        onClose={onClose}
        open={open}
        title={"Procedures"}
        header={
          <Box role="toolbar">
            <CustomButton
              label={"Add procedure"}
              variant="text"
              startIcon={<Add />}
              onClick={handleAddRow}
            />
          </Box>
        }
        children={
          <EditTable
            data={tableRows}
            onUpdateRow={handleUpdateRow}
            onDeleteRow={handleDeleteRow}
          />
        }
        footer={
          <EditToolBar
            onCancel={onCancel}
            onSave={handleSave}
            cancelLabel={"Cancel"}
            saveLabel={"Save changes"}
          />
        }
      />
    );
  }
);

export default ProceduresEditModal;
