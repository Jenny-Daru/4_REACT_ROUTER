import React from "react";
import { Outlet, useParams } from "react-router";
import { users } from "../../components/db";
import { Link } from "react-router-dom";

export default function User() {
  const { userId } = useParams();
  return (
    <div>
      <h1>
        User with id {userId} is named: {users[Number(userId) - 1].name}
      </h1>
      <hr />
      <Link to={"followers"}>See followers</Link>
      <Outlet
        context={{
          nameOfMyUser: users[Number(userId)-1].name,
        }}/>
    </div>
  );
}
