import './Edit.css';
import { Head } from "./Head";
import { Footer } from './Footer';
import React, { Component } from "react";
import {Button, FormGroup , FormControl ,ControlLabel} from "react-bootstrap"
import axios from 'axios';
import { Form } from 'antd';


const token = localStorage.getItem('token');
const role = localStorage.getItem('role');
const FormItem = Form.Item;

class Edit extends Component {
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
      role : role},
    {headers: {
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + token}})
      .then(response => {
        console.log(response);
        console.log(response.data) 
        window.location = "/admin/users"
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
        <Head />
      <div>
      <Form onSubmit={this.handleSubmit}>
      <FormItem>
        <label>E-mail : <input type="text" name="this.state.email"  onChange={this.handleEmailChange} /></label>
      </FormItem>
      <FormItem>
        <label>Imie <input type="text" name="this.state.name" onChange={this.handleNameChange} /></label>
      </FormItem>
      <FormItem>
        <label>Nazwisko <input type="text" name="this.state.surname" onChange={this.handleSurnameChange} /></label>
      </FormItem>
        <input type="submit" value="Zmien"/>
    </Form>
    <center> <output>{this.state.error}  </output></center>
    </div>
    <a>
    </a>   
    <Footer />
    </div>
    );
  }
}

export default Edit;