import {
  addTodo,
  addTodoError,
  addTodoLoading,
  addTodoSuccess,
  getTodoError,
  getTodoLoading,
  getTodoSuccess,
} from "../store/actionType";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export const Todos = () => {
  const [text, setText] = useState("");
  // const todos = useSelector((state) => state.todos);
  const { loading, todos, error } = useSelector((state) => ({
    loading: state.loading,
    todos: state.todos,
    error: state.error,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    getTodos();
  }, []);

  async function getTodos() {
    try {
      dispatch(getTodoLoading());
      const data = await fetch("http://localhost:3004/todos").then((d) =>
        d.json()
      );
      dispatch(getTodoSuccess(data));
    } catch (err) {
      dispatch(getTodoError(err));
    }
  }

  return loading ? (
    <div>Loading....</div>
  ) : error ? (
    <div> Something wemt wrong!</div>
  ) : (
    <div>
      <input
        value={text}
        type="text"
        placeholder="enter todo"
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch(addTodoLoading());
          fetch("http://localhost:3004/todos", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ status: false, title: text }),
          })
            .then((d) => d.json())
            .then((res) => {
              dispatch(addTodoSuccess(res));
              getTodos(); ///// show deta
            })
            .catch((err) => {
              dispatch(addTodoError(err));
            });
        }}
      >
        add todo
      </button>
      {todos.map((e) => (
        <div>
          {e.title}-{e.status}
        </div>
      ))}
    </div>
  );
};
