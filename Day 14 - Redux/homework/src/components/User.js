import React from "react";
import { useSelector } from "react-redux";

function User() {
  const users = useSelector(state => state.users); //Sử dụng useSelector để truy cập state
  console.log(users);
  //Hiển thị danh sách user
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default User;