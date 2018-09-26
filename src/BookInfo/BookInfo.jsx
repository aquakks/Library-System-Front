import './BookInfo.css';
import React from 'react';
import axios from 'axios';
import { Head } from "../Head";
import { Footer } from '../Footer';
import RightMenu from '../RightMenu';
import Author from './Authors';

export default class BookInfo extends React.Component {
  state = {
    book : [],
    title : '',
    year : '',
    publisher : '',    
    description: '',
    img : '',
    id : ''
  }
  componentDidMount() {
    axios.get(`http://localhost:5000/books/`+this.props.match.params.id)
      .then(res => {
        if (res.data) {
        localStorage.setItem('book', this.props.match.params.id);
        const book = res.data;
        this.setState({ 
          title : book.title,
          year : book.year,
          publisher : book.publisher,
          description: book.description,
          id : book.bookId,
          img : "../" + book.title + ".jpeg" });
      localStorage.setItem('bookid', this.state.id);
    }
    }
      )
  }


  render() {
    return (
      <ul>
      <Head />      
      <img src="https://image.ceneostatic.pl/data/products/53328867/f-dotkniecie-pustki.jpg" />
      <h2><strong>{this.state.title}</strong></h2> 
      <h4><strong>Autor</strong><Author /></h4>
      <h4><strong>Rok wydania</strong></h4>
      <h4>{this.state.year}</h4>
      <h4><strong>Wydawnictwo</strong></h4>
      <h4>{this.state.publisher}</h4>
      <h4><strong>Opis</strong></h4>
      <h6>{this.state.description}</h6>
      <form action="/orderbook">
    <input type="submit" value="Zamow" />
      </form>
      <Footer />
      </ul>
    )
  }
}