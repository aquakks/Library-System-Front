import './AuthorRow.css';
import * as React from "react";

export const AuthorRow = ({ authorId, name, surname, birthYear, nationality }) => {
  return (
<div>
<table className="authors">
    <tbody>
      <tr>
        <td className="authorId">{authorId}</td>
        <td className="name">{name}</td>
        <td className="surname">{surname}</td>
        <td className="birthYear">{birthYear}</td>
		<td className="nationality">{nationality}</td>
        <td className="edit"><a href={"/admin/authoreditbefore/"+name+"+"+surname}>Edit</a></td>
		    <td className="edit"><a href={"/admin/authoreditbefore/"+name+"+"+surname}>Delete</a></td>
      </tr>
    </tbody>
  </table>
</div>  
  );
};