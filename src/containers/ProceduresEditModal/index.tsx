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

interface ProceduresEditModalProps extends BaseModalProps {
  onCancel: () => void;
  onSave: () => void;
}

const ProceduresEditModal: React.FC<ProceduresEditModalProps> = memo(
  ({ onClose, onCancel, onSave, open }) => {
    const { procedures, saveProcedureChanges } = useProcedures();
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
      onSave();
    }, [tableRows, saveProcedureChanges, onSave]);

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
          <Box>
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
