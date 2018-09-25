import React from 'react';
import axios from 'axios';
import Authors from './Authors'


export default class BookInfo extends React.Component {
  state = {
    book : [],
    year : '',
    title : '',
    publicationdate : '',
    img : ''
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/books/`+this.props.match.params.id)
      .then(res => {
        localStorage.setItem('book', this.props.match.params.id);
        const book = res.data;
        this.setState({ 
          book : book.year,
          title : book.title,
          year : book.year,
          name : book.name, 
          img : "../" + book.title + ".jpeg" });
      })
  }


  render() {
    return (
      <div>
      {this.state.book}
      {this.state.year}
      {this.state.title}
      {this.state.img}
      
      <h1>Image</h1>


      <Authors />

</div>
    )
  }
}