import React from "react";

const ManageUserTable = ({ user, index,handleAdmin,handleInstructor }) => {
  const { name, email } = user;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        {name}
      </td>
      <td>{email}</td>
      <th>
        {
            user.role === 'admin'? <p>{user.name} is admin</p> : <button onClick={() => handleAdmin(user)} className="btn btn-ghost btn-xs">Make Admin</button>
        }
      </th>
      <th>
        {
            user.role === 'instructor'? <p>{user.name} is instructor</p> : <button onClick={() => handleInstructor(user)} className="btn btn-ghost btn-xs">Make instructor</button>
        }
      </th>
    </tr>
  );
};

export default ManageUserTable;
