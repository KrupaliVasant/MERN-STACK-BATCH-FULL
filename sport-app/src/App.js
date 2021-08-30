import { BrowserRouter } from "react-router-dom";
import "./App.css";
import RouteHandler from "./RouteHandler";

function App() {
  return (
    <div className="App-header">
      <header>
        <BrowserRouter>
          <RouteHandler />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
