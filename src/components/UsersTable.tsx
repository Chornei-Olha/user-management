import React from "react";
import { RootState, useAppSelector } from "../store/store";
import { User } from "../store/usersSlice";

const UsersTable: React.FC = () => {
  const users = useAppSelector((state: RootState) => {
    const { users, filters } = state.users;
    return users.filter(
      (user: User) =>
        user.name.includes(filters.name) &&
        user.username.includes(filters.username) &&
        user.email.includes(filters.email) &&
        user.phone.includes(filters.phone)
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user: User) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsersTable;
