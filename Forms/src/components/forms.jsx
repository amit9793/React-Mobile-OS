import { useState } from "react";

const Forms = () => {
  const [form, setForm] = useState({
    username: "",
    age: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    //e.target.name
    setForm({
      ...form, // spred the previous data
      [name]: value, // automaticaly check its username or age
    });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <>
      <form onSubmit={handlesubmit}>
        <input
          onChange={handlechange}
          name="username"
          type="text"
          placeholder="enter name"
        />
        <input
          type="number"
          onChange={handlechange}
          name="age"
          placeholder="enter age"
        />
        <input type="submit" value="submit" />
      </form>
    </>
  );
};
export default Forms;
