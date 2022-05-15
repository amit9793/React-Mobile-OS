import { useContext } from "react";
import { CartContext } from "./context/Cartcontext";

const Cart = () => {
  const { cart } = useContext(CartContext); //get all data who staore in cartcontext
  // its object in this time there are value anf onne function
  return (
    <>
      <div>No of Cart ites :{cart}</div>
    </>
  );
};
export default Cart;
