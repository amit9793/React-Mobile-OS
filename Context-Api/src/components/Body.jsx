import { useContext } from "react";
import { CartContext } from "./context/Cartcontext";

const Body = () => {
  const { handleCartUpdate } = useContext(CartContext);
  return (
    <>
      <div>
        <button
          onClick={() => {
            handleCartUpdate(1);
          }}
        ></button>
      </div>
    </>
  );
};
export default Body;
