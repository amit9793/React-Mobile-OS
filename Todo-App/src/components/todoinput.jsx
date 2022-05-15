import { useState } from "react";

function Todoinput({getdata}) {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    getdata(text);
  };

  return (
    <>
      <input type="text" placeholder="enter" onChange={handleChange} />
      <button onClick={handleClick}>Add</button>
    </>
  );
}
export default Todoinput;
