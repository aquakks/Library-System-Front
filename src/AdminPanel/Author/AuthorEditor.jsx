import React, { Component } from "react";
import {Button, FormGroup , FormControl ,ControlLabel} from "react-bootstrap"
import axios from 'axios';
import { Form } from 'antd';

let oldid= localStorage.getItem('editid');
let oldName = localStorage.getItem('editname'); 
let oldSurname = localStorage.getItem('editsurname');   
let oldBirthYear = localStorage.getItem('editbirthYear');   
let oldNationality= localStorage.getItem('editnationality');   

const FormItem = Form.Item;

class AuthorEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nationality : "",
      birthYear : "",
      name : "",
      surname : "",
      error : ""
    };
  }







  handleBirthYearChange = event => {this.setState({ email: event.target.value })}
  handleNationalityChange = event => {this.setState({ role: event.target.value })}
  handleNameChange = event => {this.setState({ name: event.target.value })}
  handleSurnameChange = event => {this.setState({ surname: event.target.value })}

  handleSubmit = event => {
    event.preventDefault();

    axios.put('http://localhost:5000/authors/'+ oldid,
    { name : this.state.name,
      surname : this.state.surname,
      birthYear : this.state.birthYear,
      nationality : this.state.nationality},
    {headers: {
      'Content-Type': 'application/json'}})
    .then(response => {
      if (response.data)
      {
      console.log(response);
      console.log(response.data) 
      window.location = "/admin/users"
      }})
      .catch(function (error) {
   this.setState({
        error: 'Błąd!'
       }); 
      }.bind(this))}
        
      
    

  render() {
    return (
      
      <div>
      <div>
      <Form onSubmit={this.handleSubmit}>
      <FormItem>
        <label>birthYear : <input type="text" name="this.state.birthYear" placeholder={oldBirthYear} onChange={this.handleBirthYearChange} /></label>
      </FormItem>
      <FormItem>
        <label>Rola <input type="text" name="this.state.role" placeholder={oldNationality} onChange={this.handleNationalityChange} /></label>
      </FormItem>
      <FormItem>
        <label>Imie <input type="text" name="this.state.name" placeholder={oldName} onChange={this.handleNameChange} /></label>
      </FormItem>
      <FormItem>
        <label>Nazwisko <input type="text" name="this.state.surname" placeholder={oldSurname} onChange={this.handleSurnameChange} /></label>
      </FormItem>
        <input type="submit" value="Zmien"/>
    </Form>
    <center> <output>{this.state.error}  </output></center>
    </div>
    <a>
    </a>   
    </div>
    );
  }
}

export default AuthorEditor;