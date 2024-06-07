import React, { lazy, Suspense } from "react";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Screen from "../components/Screen";
import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";

const ProceduresTable = lazy(() => import("../containers/ProceduresTable"));
const ProceduresAlertPanel = lazy(
  () => import("../containers/ProceduresAlertPanel")
);

const ProceduresScreen: React.FC = () => {
  return (
    <Screen
      header={
        <Header>
          <Toolbar>
            <Typography variant="h6">{"Procedures"}</Typography>
          </Toolbar>
        </Header>
      }
      body={
        <Body>
          <Suspense fallback={null}>
            <ProceduresTable />
          </Suspense>
        </Body>
      }
      footer={
        <Footer>
          <Toolbar>
            <Suspense fallback={null}>
              <ProceduresAlertPanel />
            </Suspense>
          </Toolbar>
        </Footer>
      }
    />
  );
};

export default ProceduresScreen;
