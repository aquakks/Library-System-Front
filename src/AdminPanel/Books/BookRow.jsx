import './BookRow.css';
import * as React from "react";

export const BookRow = ({ idBook, authors, title, publisher, year, date, description, copies}) => {
  return (
<div>
<table className="books" width="80%">
    <tbody>
      <tr>
        <td className="idBook">{idBook}</td>
        <td className="authors">{authors}</td>
        <td className="title">{title}</td>
        <td className="publisher">{publisher}</td>
		    <td className="year">{year}</td>
        <td className="date">{date}</td>
        <td className="description">{description}</td>
        <td className="copies">{copies}</td>
		    <td className="edit"><button type="button">Edytuj</button></td>
        <td className="delete"><button type="button">Usuń</button></td>
      </tr>
    </tbody>
  </table>
</div>  
  );
};