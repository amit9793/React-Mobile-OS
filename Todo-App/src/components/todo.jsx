import Todoinput from "./todoinput";
import { useState } from "react";
import { Todoitem } from "./todoitems";
import { nanoid } from "nanoid";

function Child() {
  const [list, setList] = useState([]);

  const handle = (data) => {
    const payload = {
      title: data,
      status: false,
      id: nanoid(7),
    };
    setList([...list, payload]);
  };
  const handledelete = (id) => {};

  return (
    <>
      <Todoinput getdata={handle} />
      {list.map((e) => (
        <Todoitem key={e.id} {...e} handledelete={handledelete} />
      ))}
    </>
  );
}
export default Child;
