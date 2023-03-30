import { BrowserRouter } from "react-router-dom";
import Router from "./router";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
    // <div className="App font-mono">
    //   <Welcome />
    // </div>
  );
}

export default App;
