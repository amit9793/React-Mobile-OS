import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div>
      <Link to="/">Homepage</Link>
      <Link to="/about" style={{ margin: "30px" }}>
        About
      </Link>
      <Link to="/users" style={{ margin: "30px" }}>
        Users
      </Link>
      <Link to="/Login" style={{ margin: "30px" }}>
        Login
      </Link>
    </div>
  );
};
