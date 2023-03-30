import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchAllUsers } from "../features/user/userSlice";
import { Table } from "@mantine/core";

const Users = () => {
  const dispatch = useAppDispatch();
  const { users, status } = useAppSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchAllUsers()).unwrap();
  }, []);

  const data = users.map((user) => (
    <tr key={user.id}>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
    </tr>
  ));

  return (
    <div>
      {status === "pending" ? (
        <h1>Fetching...</h1>
      ) : (
        <Table striped highlightOnHover withBorder withColumnBorders>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>{data}</tbody>
        </Table>
      )}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Users;
