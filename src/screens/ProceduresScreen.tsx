import React, { lazy, Suspense } from 'react';
import Toolbar from '@mui/material/Toolbar';
import Screen from '../components/Screen';
import Header from '../components/Header';
import Body from '../components/Body';
import Footer from '../components/Footer';

const ProceduresToolBar = lazy(() => import('../containers/ProceduresToolBar'));
const ProceduresTable = lazy(() => import('../containers/ProceduresTable'));
const ProceduresAlertPanel = lazy(
  () => import('../containers/ProceduresAlertPanel'),
);

const ProceduresScreen: React.FC = () => {
  return (
    <Screen
      header={
        <Header>
          <Suspense fallback={null}>
            <ProceduresToolBar />
          </Suspense>
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
