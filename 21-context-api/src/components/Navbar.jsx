import React from "react";
import Nav2 from "./Nav2";
import { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeContex";

const Navbar = (props) => {
  const data = useContext(ThemeDataContext);
  console.log(data)
  return (
    <div>
      <data className="nav">
        <h2>Bhupendra</h2>
        <Nav2 theme={props.theme} />
      </data>
    </div>
  );
};

export default Navbar;
