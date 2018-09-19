import './BookHeader.css';
import * as React from "react";
import { BookRow } from "./BookRow";

export class BookHeader extends React.Component {
  bookToBookRow = book => {
  console.log(book);
	const idBook = book.id;
	const authors = book.authors;
	const title = book.title;
	const publisher = book.publisher;
	const year = book.year;
  const date = book.date;
  const description = book.description;
  const copies = book.copies;
    return <BookRow idBook={idBook} authors={authors} title={title} publisher={publisher} year={year} date={date} description={description} copies={copies} />;
  };

  render() {
    return (    
    <div>
    <table className="table">
    <tr>
      <th className="idBook">id</th>
      <th className="authors">autorzy</th>
      <th className="title">tytuł</th>
      <th className="publisher">wydawnictwo</th>
      <th className="year">rok</th>
      <th className="date">data</th>
      <th className="description">opis</th>
      <th className="copies">kopie</th>
      <th className="edit"></th>
      <th className="delete"></th>
    </tr>  
    </table>
    <ul className="ui relaxed divided list selection">
        {this.props.books.map(this.bookToBookRow)}
    </ul>
    </div>
    );
};
}