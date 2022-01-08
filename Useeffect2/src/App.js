import "./App.css";
import { Timer } from "./components/counter";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      <header className="App-header"></header>
      {show ? <Timer /> : null}
      <button onClick={() => setShow(!show)}></button>
    </div>
  );
}

export default App;
