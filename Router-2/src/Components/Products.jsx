import { useParams } from "react-router-dom";
export const Products = () => {
  const { id } = useParams();
  return (
    <>
      <h1>Products id:{id}</h1>
    </>
  );
};
