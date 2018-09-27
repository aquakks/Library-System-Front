import React, { Component } from "react";
import {Button, FormGroup , FormControl ,ControlLabel} from "react-bootstrap"
import { Head } from "./Head";
import { Footer } from './Footer';
import axios from 'axios';
import { Form } from 'antd';
import "./Login.css";



const FormItem = Form.Item;

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      error : ""
    };
  }





  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleEmailChange = event => {this.setState({ email: event.target.value })}
  handlePasswordChange = event => {this.setState({ password: event.target.value })}

  handleSubmit = event => {
    event.preventDefault();

    axios.post('http://localhost:5000/login',
    { email: this.state.email, password: this.state.password },)
    .then(response => {
      if (response.data)
      {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('email', this.state.email);
      console.log(response);
      console.log(response.data) 
      window.location = "/test"
      }})
      .catch(function (error) {
   this.setState({
        error: 'Błąd! Złe dane logowania!'
       }); 
      }.bind(this))}
        
      
    

  render() {
    return (
      
      <div>
      <Head />
      <div>
      <Form onSubmit={this.handleSubmit}>
      <FormItem>
        <label>Login <input type="text" name="this.state.email" onChange={this.handleEmailChange} /></label>
      </FormItem>
      <FormItem>
        <label>Haslo <input type="password" name="this.state.password" onChange={this.handlePasswordChange} /></label><br />
      </FormItem>
        <input type="submit" value="Zaloguj"/>
    </Form>
    <center> <output>{this.state.error}  </output></center>
    </div>
    <a>
    <Footer /> 
    </a>   
    </div>
    );
  }
}

export default Login;