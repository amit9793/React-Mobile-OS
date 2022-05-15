import logo from "./logo.svg";
import "./App.css";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { Products } from "./Components/Products";
import { User } from "./Components/User";
import { Userdetails } from "./Components/Userdetails";
import { Login } from "./Components/Login";
import {PrivateRoute} from "./Components/PrivateRouter"
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/products/:id" element={<Products />}></Route>
        <Route path="/users" element={<User />}></Route>
        <PrivateRoute
          path="/users/:userid"
          element={<Userdetails />}
        ></PrivateRoute>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
