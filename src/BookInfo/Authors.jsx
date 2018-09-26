import React from 'react';
import axios from 'axios';



const title = localStorage.getItem('book');

export default class Authors extends React.Component {
  state = {
    authors : [] }


  componentDidMount() {
    axios.get(`http://localhost:5000/books/`+title + '/authors')
    .then(res => {
        const authors = res.data;
        this.setState({ authors });
      })
  }


  render() {
    return (
        <ul>
        { this.state.authors.map(authors => <li>{authors.name + ' ' + authors.surname}</li>)}
      </ul>

    )
  }
}