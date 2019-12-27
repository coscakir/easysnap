import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div class="header">
        <div class="logo">
          <h2 class="logo__title">easysnap</h2>
        </div>

        <div class="header_menu">
          <NavLink to="/" exact>
            snaps
          </NavLink>
          <NavLink to="/login">login</NavLink>
          <NavLink to="/join">join</NavLink>
        </div>
      </div>
    );
  }
}

export default Header;
