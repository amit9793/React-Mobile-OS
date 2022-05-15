import "../shopcurrents.css";

function Shoporder({ title, id, handledelete, adddata }) {
  const deletedata = () => {
    handledelete(id);
    adddata(title);
  };

  return (
    <div className="left">
      <div>{title}</div>

      <button onClick={deletedata}>Move</button>
    </div>
  );
}
export default Shoporder;
