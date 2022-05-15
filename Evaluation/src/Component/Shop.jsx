import Shopinput from "./Shopinput";
import Shopcurrent from "./Shopcurrent";
import Shoporder from "./Shoporder";
import { useState } from "react";
import { nanoid } from "nanoid";

function Shopmain({ d }) {
  const [input, setInput] = useState([]);
  const [order, setOrder] = useState([]);

  const handlemain = (name) => {
    const payload = {
      title: name,
      status: false,
      id: nanoid(7),
    };
    setInput([...input, payload]);
  };
  const handlemainorder = (as) => {
    const payload = {
      title: as,
      status: false,
      id: nanoid(7),
    };
    setOrder([...order, payload]);
  };
  const handledelete = (a) => {
    const deleteitems = order.filter(({ id }) => {
      return { id }.id !== a;
    });
    setOrder(deleteitems);
  };
  const adddata = (a) => {
    const payload = {
      title: a,
      status: false,
      id: nanoid(2),
    };
    setInput([...input, payload]);
  };

  return (
    <>
      <h1>main</h1>
      <Shopinput handlemain={handlemain} handlemainorder={handlemainorder} />
      <div className="demo">
        <div className="leftagain">
          <h1>Current</h1>
          {input.map((e) => (
            <Shopcurrent key={e.id} {...e} />
          ))}
        </div>
        <div className="rightagain">
          <h1>Order</h1>
          {order.map((e) => (
            <Shoporder
              key={e.id}
              {...e}
              handledelete={handledelete}
              adddata={adddata}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Shopmain;
