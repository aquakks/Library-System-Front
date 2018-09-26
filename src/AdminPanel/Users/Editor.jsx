import React, { Component } from "react";
import {Button, FormGroup , FormControl ,ControlLabel} from "react-bootstrap"
import axios from 'axios';
import { Form } from 'antd';


let oldRole= localStorage.getItem('editrole');  
let oldMail = localStorage.getItem('editemail');   
let oldName = localStorage.getItem('editname'); 
let oldSurname = localStorage.getItem('editsurname');   

const FormItem = Form.Item;

class Editor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      role : "",
      name : "",
      surname : "",
      error : ""
    };
  }





  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleEmailChange = event => {this.setState({ email: event.target.value })}
  handleRoleChange = event => {this.setState({ role: event.target.value })}
  handleNameChange = event => {this.setState({ name: event.target.value })}
  handleSurnameChange = event => {this.setState({ surname: event.target.value })}

  handleSubmit = event => {
    event.preventDefault();

    axios.put('http://localhost:5000/users/'+ this.props.match.params.id,
    { email : this.state.email,
      name : this.state.name,
      surname : this.state.surname,
      role : this.state.role},
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
        <label>E-mail : <input type="text" name="this.state.email" placeholder={oldMail} onChange={this.handleEmailChange} /></label>
      </FormItem>
      <FormItem>
        <label>Rola <input type="text" name="this.state.role" placeholder={oldRole} onChange={this.handleRoleChange} /></label>
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

export default Editor;