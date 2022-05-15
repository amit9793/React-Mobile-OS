import "./App.css";
import { useState } from "react";

function App() {
  const [state, setState] = useState("");

  const Parents = (z) => {
    setState(z);
  };
  return (
    <div className="App">
      <h1>hello{state}</h1>
      <Child1 callparents={Parents} />
      <Child2 num={state} />
    </div>
  );
}
const Child1 = ({ callparents }) => {
  var z = "i am in child1";
  callparents(z);
  return <h1>i am child1</h1>;
};
const Child2 = ({ num }) => {
  return <h1>`i am heare{num}`</h1>;
};

export default App;
