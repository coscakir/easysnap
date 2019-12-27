import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const Header = ({ session }) => {
  return (
    <div className="header">
      <div className="logo">
        <h2 className="logo__title">snaps</h2>
      </div>

      <div className="header_menu">
        <NavLink to="/" exact>
          snaps
        </NavLink>
        {session.activeUser ? (
          <LinksWithLogin session={session} />
        ) : (
          <LinksWithNoLogin />
        )}
      </div>
    </div>
  );
};

const LinksWithLogin = ({ session }) => (
  <Fragment>
    <NavLink to="/profile">@{session.activeUser.username}</NavLink>
  </Fragment>
);

const LinksWithNoLogin = () => (
  <Fragment>
    <NavLink to="/login">login</NavLink>
    <NavLink to="/join">join</NavLink>
  </Fragment>
);

export default Header;
