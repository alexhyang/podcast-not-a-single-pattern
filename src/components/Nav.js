import React from "react";
import NavButton from "./NavButton";

function Nav(props) {
  return (
    <nav className="nav row justify-content-around">
      <NavButton text="Button 1" />
      <NavButton text="Button 2" />
      <NavButton text="Button 3" />
      <NavButton text="Button 4" />
    </nav>
  );
}

export default Nav;
