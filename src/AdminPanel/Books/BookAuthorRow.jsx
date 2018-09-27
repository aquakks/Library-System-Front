import './BookRow.css';
import * as React from "react";

export const BookAuthorRow = ({ idBook, title, publisher, year, date, description, copies}) => {
  return (
<div>
<table className="books" width="80%">
    <tbody>
      <tr>
        <td className="idBook">{idBook}</td>
        <td className="title">{title}</td>
        <td className="publisher">{publisher}</td>
		    <td className="year">{year}</td>
        <td className="date">{date}</td>
        <td className="description">{description}</td>
        <td className="copies">{copies}</td>
        <td className="display"><a href={"/"}>Wyświetl autora</a></td>
		    <td className="add"><a href={"/"}>Dodaj autora</a></td>
      </tr>
    </tbody>
  </table>
</div>  
  );
};