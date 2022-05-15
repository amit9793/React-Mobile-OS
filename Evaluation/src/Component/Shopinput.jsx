import { useState } from "react";
import Shopmain from "./Shop";

function Shopinput({ handlemain, handlemainorder }) {
  const [input, setInput] = useState();

  const handlechange = (e) => {
    setInput(e.target.value);
  };

  const handleclick = () => {
    handlemain(input);
  };
  const handleclickorder = () => {
    handlemainorder(input);
  };

  return (
    <>
      <input type="text" placeholder="ENTER TODO" onChange={handlechange} />
      <button onClick={handleclick}>curr</button>
      <button onClick={handleclickorder}>order</button>
    </>
  );
}
export default Shopinput;
