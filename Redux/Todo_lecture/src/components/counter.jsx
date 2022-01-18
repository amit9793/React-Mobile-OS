import { useSelector, useDispatch } from "react-redux";

export const Counter = () => {
  const counter = useSelector((state) => state.counter); //get the deta
  const dispatch = useDispatch(); // update the deta

  return (
    <div>
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
};
