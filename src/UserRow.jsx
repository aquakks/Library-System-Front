import './UserRow.css';
import * as React from "react";

export const UserRow = ({ id, email, name, surname, role, created, updated}) => {
  return (
<div>
<table className="table" width="80%" >
    <tbody>
      <tr>
        <td className="id">{id}</td>
        <td className="email">{email}</td>
        <td className="name">{name}</td>
		    <td className="surname">{surname}</td>
        <td className="created">{created}</td>
        <td className="updated">{updated}</td>
        <td className="role">{role}</td>
		    <td className="edit"><button type="button">Edytuj</button></td>
        <td className="delete"><button type="button">Usuń</button></td>
      </tr>
    </tbody>
  </table>
</div>  
  );
};