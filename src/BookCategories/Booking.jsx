import './Book.css';
import { BooksList } from "./BooksList";
import React, { Component } from 'react';
import { Head } from "../Head";
import RightMenu  from '../RightMenu';
import { Footer } from '../Footer';

 
const cos = localStorage.getItem('category');
 
export class Booking extends Component {
    state = {
        books: null
      };
 
      componentDidMount() {
        //fetch("https://randomuser.me/api/?format=json&results=10")
        fetch("http://localhost:5000/books/all/"+ this.props.match.params.id)
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

           <div className="App">
    <Head />
      <div class="row">
    <div class="rightcolumn"><RightMenu /></div>
    {books ? <BooksList books={books} /> : 'Ładowanie…'}
</div>
       <Footer />
     </div>

 
    </div>
    );
};
}