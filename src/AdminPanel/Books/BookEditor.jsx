import React, { Component } from "react";
import {Button, FormGroup , FormControl ,ControlLabel} from "react-bootstrap"
import axios from 'axios';
import { Form } from 'antd';

let oldid = localStorage.getItem('editid');
let oldtitle = localStorage.getItem('edittitle');
let oldpublisher = localStorage.getItem('editpublisher');
let oldyear = localStorage.getItem('edityear');
let oldpublication = localStorage.getItem('editpublicationDate');
let olddescription = localStorage.getItem('editdescription');
let oldcategory = localStorage.getItem('editcategory');
let oldnoc = localStorage.getItem('editnoc');
let token = localStorage.getItem('token');

const FormItem = Form.Item;

class AuthorEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id : '',
      title : '',
      publisher : '',
      year : '',
      publicationDate : '',
      description : '',
      category : '',
      noc : ''
    };
  }







  handleIdChange = event => {this.setState({ id: event.target.value })}
  handleTitleChange = event => {this.setState({ title: event.target.value })}
  handlePublisherChange = event => {this.setState({ publisher: event.target.value })}
  handleYearChange = event => {this.setState({ year: event.target.value })}
  handlePublicationDateChange = event => {this.setState({ publicationDate: event.target.value })}
  handleDescriptionChange = event => {this.setState({ description: event.target.value })}
  handleCategoryChange = event => {this.setState({ category: event.target.value })}
  handleNocChange = event => {this.setState({ noc: event.target.value })}

  handleSubmit = event => {
    event.preventDefault();

    axios.put('http://localhost:5000/books/'+ oldid +'/edit',
    { title : this.state.title,
      publisher : this.state.publisher,
      year : this.state.year,
      publicationDate : this.state.publicationDate,
      description : this.state.description,
    category : this.state.category,
  numberOfCopies : this.state.noc},
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
      
      <div>
      <div>
      <Form onSubmit={this.handleSubmit}>
      <FormItem>
        <label>Tytuł : <input type="text" name="this.state.title" placeholder={oldtitle} onChange={this.handleTitleChange} /></label>
      </FormItem>
      <FormItem>
        <label>Wydawca :  <input type="text" name="this.state.publisher" placeholder={oldpublisher} onChange={this.handlePublisherChange} /></label>
      </FormItem>
      <FormItem>
        <label>Rok wydania : <input type="text" name="this.state.year" placeholder={oldyear} onChange={this.handleYearChange} /></label>
      </FormItem>
      <FormItem>
        <label>Data publikacji : <input type="text" name="this.state.publicationDate" placeholder={oldpublication} onChange={this.handlePublicationDateChange} /></label>
      </FormItem>
      <FormItem>
        <label>Opis : <input type="text" name="this.state.description" placeholder={olddescription} onChange={this.handleDescriptionChange} /></label>
      </FormItem>
      <FormItem>
        <label>Kategoria : <input type="text" name="this.state.category" placeholder={oldcategory} onChange={this.handleCategoryChange} /></label>
      </FormItem>
      <FormItem>
        <label>Kopie : <input type="text" name="this.state.noc" placeholder={oldnoc} onChange={this.handleNocChange} /></label>
      </FormItem>
        <input type="submit" value="Zmien"/>
    </Form>
    </div>
    <center> <output>{this.state.error}  </output></center>
    <a>
    </a>   
    </div>
    );
  }
}

export default AuthorEditor;