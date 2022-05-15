import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "./store/actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter:{counter}</h1>
      <button
        onClick={() => {
          dispatch(addTodo(1));
        }}
      >
        add 1
      </button>
    </div>
  );
}

export default App;
