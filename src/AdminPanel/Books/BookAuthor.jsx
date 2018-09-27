import './Book2.css';
import { BookAuthorHeader } from "./BookAuthorHeader";
import React, { Component } from 'react';
 
 
 
export class BookAuthor extends Component {
    state = {
        booksAuthor: null
      };
 
      componentDidMount() {
        fetch("http://localhost:5000/books/all")
          .then(res => res.json())
          .then(json => {
              let result = json.results || json;
              this.setState({ booksAuthor: result });
              console.log(result)
            }
            );
      }
 
     render() {
    const booksAuthor = this.state.booksAuthor;
     
    return (
     <div>
     {booksAuthor ? <BookAuthorHeader booksAuthor={booksAuthor} /> : 'Ładowanie…'}
 
    </div>
    );
};
}