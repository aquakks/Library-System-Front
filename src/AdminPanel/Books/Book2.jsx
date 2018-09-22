import './Book2.css';
import { BookHeader } from "./BookHeader";
import React, { Component } from 'react';
 
 
 
export class Book2 extends Component {
    state = {
        books: null
      };
 
      componentDidMount() {
        fetch("http://localhost:5000/books/all")
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
     {books ? <BookHeader books={books} /> : 'Ładowanie…'}
 
    </div>
    );
};
}