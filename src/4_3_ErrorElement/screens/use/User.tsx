import React from "react";
import { useParams } from "react-router";
import { users } from "../../components/db";

export default function User() {
  const { userId } = useParams();
  return (
    <h1>
      User with id {userId} is named: {users[Number(userId) - 1].name}
    </h1>
  );
}
