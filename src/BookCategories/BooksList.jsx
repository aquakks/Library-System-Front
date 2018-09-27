import * as React from "react";
import { BookItem } from "./BookItem";


 
export class BooksList extends React.Component {
  bookToBookItem = book => {
    console.log(book);
    const avatarUrl = book.picture ? book.picture.thumbnail : {};
    const name = book.title;
    const rok=book.year;
    const desc = book.descrpiton;
    const ilosc=book.numberOfCopies;
    return <BookItem key={name} rok={rok} desc={desc} ilosc={ilosc} avatarUrl={avatarUrl} name={name} />;
  };
 
  render() {
    return (
      <ul className="ui relaxed divided list selection">
        {this.props.books.map(this.bookToBookItem)}
      </ul>
    );
  }
}