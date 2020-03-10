import React from 'react';
import { NavLink } from "react-router-dom";

function NavBar(){
  return (
    <NavLink exact to="/cart">
      Cart
    </NavLink>
  )
}

export default NavBar;