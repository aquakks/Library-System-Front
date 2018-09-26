import './AddBookItem.css';
import React from 'react';
import axios from 'axios';
import { Form } from 'antd';

const FormItem = Form.Item;
let token = localStorage.getItem('token');

export default class AddBookItem extends React.Component {
  
  state = {
    title: '',
    publisher: '',
    year: '',
    publicationDate: '',
    description: '',
    category: '',
    numberOfCopies: '',
  };

  handleTitleChange = event => {this.setState({ title: event.target.value })}
  handlePublisherChange = event => {this.setState({ publisher: event.target.value })}
  handleYearChange = event => {this.setState({ year: event.target.value })}
  handlePublicationDateChange = event => {this.setState({ publicationDate: event.target.value })}
  handleDescriptionChange = event => {this.setState({ description: event.target.value })}
  handleCategoryChange = event => {this.setState({ category: event.target.value })}
  handleNumberOfCopiesChange = event => {this.setState({ numberOfCopies: event.target.value })}

  handleSubmit = event => {
    event.preventDefault();

    axios.post('http://localhost:5000/books/detailed',
      { title: this.state.title, 
        publisher: this.state.publisher, 
        year: this.state.year, 
        publicationDate: this.state.publicationDate, 
        description: this.state.description, 
        category: this.state.category, 
        numberOfCopies: this.state.numberOfCopies},
        {headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + token}})
          .then(response => {
            console.log(response);
            console.log(response.data) 
            window.location = "/admin/books"
      })
            .catch((error) => {
              if (error.response) {
                console.log(error.response.data); 
                this.setState({
                  error : error.response.data.message
                }); 
                } 
            })}
              

  render() {
    return (

      <Form onSubmit={this.handleSubmit}>
        <FormItem>
          <label>Tytuł: <input type="text" name="this.state.title" placeholder = "Krzyżacy" onChange={this.handleTitleChange} /></label><br />
        </FormItem>
        <FormItem>
          <label>Wydawnictwo: <input type="text" name="this.state.publisher" onChange={this.handlePublisherChange} /></label>
        </FormItem>
        <FormItem>
          <label>Rok wydania: <input type="text" name="this.state.year" onChange={this.handleYearChange} /></label>
        </FormItem>
        <FormItem>
          <label>Data publikacji: <input type="text" name="this.state.publicationDate" onChange={this.handlePublicationDateChange} /></label><br />
        </FormItem>
        <FormItem>
          <label>Opis: <input type="text" name="this.state.description" onChange={this.handleDescriptionChange} /></label><br />
        </FormItem>
        <FormItem>
          <label>Kategoria: <input type="text" name="this.state.category" onChange={this.handleCategoryChange} /></label><br />
        </FormItem>
        <FormItem>
          <label>Liczba kopii: <input type="text" name="this.state.numberOfCopies" onChange={this.handleNumberOfCopiesChange} /></label>
        </FormItem>
          <input type="submit" value="Dodaj książkę"/>
      </Form>
      
      
    )
  }
}