import { BooksList } from "./BooksList";
import React, { Component } from 'react';
 
 
 
class BookInfo extends Component {
    state = {
        books: null
      };
 
      componentDidMount() {
        //fetch("https://randomuser.me/api/?format=json&results=10")
        fetch("http://localhost:5000/books/Azyl")
          .then(res => res.json())
          .then(json => {
              let result = json.results || json;
              this.setState({ books: result });
              console.log(result)
            }
            );
      }
 
     render() {
    const books = this.state.books;
     
    return (
     <div>
     {books ? <BooksList books={books} /> : 'Ładowanie…'}
 
    </div>
    );
};
}
export default BookInfo;