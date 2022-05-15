import { useState } from "react";
import { useEffect } from "react";
import "../components/todo.css";

export const Todo = () => {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    getTodo();
  }, []);

  const getTodo = () => {
    fetch("http://localhost:8000/posts")
      .then((d) => d.json())
      .then((res) => {
        setTodo(res);
      });
  };

  const addTodo = () => {
    const payload = {
      title: text,
      status: false,
    };
    fetch("http://localhost:8000/posts", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json",
      },
    }).then(() => {
      getTodo();
    });
  };

  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button onClick={addTodo}>add todo</button>

      <div className="demo1">
        {todo.map((e, i) => (
          <div className="demo2">{e.title}</div>
        ))}
      </div>
    </div>
  );
};
