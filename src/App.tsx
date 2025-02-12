import "./App.css";
import { ProceduresScreen } from "./screens";
import { StoreProvider } from "./providers";

function App() {
  return (
    <StoreProvider>
      <div className="App">{<ProceduresScreen />}</div>
    </StoreProvider>
  );
}

export default App;
