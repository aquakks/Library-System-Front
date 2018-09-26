import React, { Component } from "react";
import {Button, FormGroup , FormControl ,ControlLabel} from "react-bootstrap"
import axios from 'axios';
import { Form } from 'antd';


let oldrole= localStorage.getItem('editrole');  
let oldemail = localStorage.getItem('editemail');  

const FormItem = Form.Item;

class Editor extends Component {
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

    axios.put('http://localhost:5000/users/'+ this.props.match.params.id,
    { email: this.state.email, password: this.state.password },
    {headers: {
      'Content-Type': 'application/json'}})
    .then(response => {
      if (response.data)
      {
      localStorage.setItem('email', this.state.email);
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
        <label>Login <input type="text" name="this.state.email" value={oldrole} onChange={this.handleEmailChange} /></label>
      </FormItem>
      <FormItem>
        <label>Haslo <input type="text" name="this.state.password" value={oldrole} onChange={this.handlePasswordChange} /></label><br />
      </FormItem>
        <input type="submit" value="Zaloguj"/>
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