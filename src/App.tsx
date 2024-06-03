import "./App.css";
import { ProceduresScreen } from "./screens";
import AlertProvider from "./providers/AlertProvider";
import ProceduresProvider from "./providers/ProceduresProvider";

function App() {
  return (
    <AlertProvider>
      <ProceduresProvider>
        <div className="App">{<ProceduresScreen />}</div>
      </ProceduresProvider>
    </AlertProvider>
  );
}

export default App;
