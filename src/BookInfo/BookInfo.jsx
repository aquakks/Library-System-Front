import React from 'react';
import axios from 'axios';

export default class BookInfo extends React.Component {
  state = {
    book : [],
    year : '',
    title : '',
    publicationdate : ''
  }



  componentDidMount() {
    axios.get(`http://localhost:5000/books/`+this.props.match.params.id)
      .then(res => {
        const book = res.data;
        this.setState({ 
          book : book.year,
          title : book.title,
          year : book.year,
          name : book.name });
      })
  }

  render() {
    return (
      <ul>
      {this.state.book}
      {this.state.year}
      {this.state.title}
      </ul>
    )
  }
}