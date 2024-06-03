import React, {
  useState,
  useEffect,
  lazy,
  Suspense,
  memo,
  useCallback,
} from "react";
import { useProcedures } from "../../providers/ProceduresContext";
import { ActionsEnum } from "../../types";
import TableContainer from "../../components/TableContainer";
import Table from "../../components/Table";
import ToolBar from "../../components/ToolBar";
import CustomButton from "../../components/CustomButton";
import EmptyTable from "../../components/EmptyTable";
import CreateIcon from "@mui/icons-material/Create";

const ProceduresEditModal = lazy(() => import("../ProceduresEditModal"));

const ProceduresTable: React.FC = memo(() => {
  const {
    proceduresData,
    fetchProcedures,
    updateActionProcedure,
    cancelProcedureChanges,
  } = useProcedures();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreate = useCallback(() => {
    updateActionProcedure(ActionsEnum.POST);
    setIsModalOpen(true);
  }, [updateActionProcedure]);

  const handleUpdate = useCallback(() => {
    updateActionProcedure(ActionsEnum.PUT);
    setIsModalOpen(true);
  }, [updateActionProcedure]);

  const handleCancelModal = useCallback(() => {
    cancelProcedureChanges();
    setIsModalOpen(false);
  }, [cancelProcedureChanges]);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const handleSaveModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  useEffect(() => {
    fetchProcedures();
  }, [fetchProcedures]);

  return (
    <>
      {!proceduresData ? (
        <></>
      ) : proceduresData.length <= 0 ? (
        <EmptyTable
          label={"There is no data to show"}
          buttonLabel={"Add procedures"}
          onClick={handleCreate}
        />
      ) : (
        <>
          <TableContainer>
            <Table data={proceduresData || []} />
          </TableContainer>
          <ToolBar>
            <CustomButton
              label="Edit procedures"
              onClick={handleUpdate}
              startIcon={<CreateIcon />}
            />
          </ToolBar>
        </>
      )}
      {isModalOpen && (
        <Suspense fallback={null}>
          <ProceduresEditModal
            onClose={handleCloseModal}
            onCancel={handleCancelModal}
            onSave={handleSaveModal}
            open={isModalOpen}
          />
        </Suspense>
      )}
    </>
  );
});

export default ProceduresTable;