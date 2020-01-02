import React from "react";
import Moment from "react-moment";
import auth from "../auth";

const Profile = ({ session: { activeUser } }) => (
  <div>
    <h3>Profile</h3>
    <div>
      Hello <strong>{activeUser.username}</strong>,
    </div>
    <div>
      You joined us at
      <i>
        <Moment date={activeUser.createdAt} format=" YYYY/MM/DD" />
      </i>
    </div>
  </div>
);

export default auth(session => session && session.activeUser)(Profile);
