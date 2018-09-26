import './UserRow.css';
import * as React from "react";

export const UserRow = ({ id, email, name, surname, role, created, updated}) => {
  return (
<div>
<table className="users">
    <tbody>
      <tr>
        <td className="id">{id}</td>
        <td className="email">{email}</td>
        <td className="name">{name}</td>
		    <td className="surname">{surname}</td>
        <td className="created">{created}</td>
        <td className="updated">{updated}</td>
        <td className="role">{role}</td>
		    <td className="edit"><a href={"/admin/usereditbefore/"+id}>Edit</a></td>
		    <td className="edit"><a href={"/admin/userdelete/"+id}>Delete</a></td>
      </tr>
    </tbody>
  </table>
</div>  
  );
};