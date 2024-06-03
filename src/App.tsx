import React from "react";
import "./App.css";
import { ProceduresScreen } from "./screens";
import ProceduresProvider from "./providers/ProceduresProvider";

function App() {
  return (
    <ProceduresProvider>
      <div className="App">
        {<ProceduresScreen />}
      </div>
    </ProceduresProvider>
  );
}

export default App;
