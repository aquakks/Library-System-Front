import React, { Component } from "react";
import axios from 'axios';
import { Form } from 'antd';

const token = localStorage.getItem('token');
const FormItem = Form.Item;

var config = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': "Bearer " + token}
};





class SetPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cos: ""
    };
  }

  handleCosChange = event => {this.setState({ cos: event.target.value })}



      
  handleSubmit = event => {
    event.preventDefault();

    axios.put('http://localhost:5000/users/'+ this.props.match.params.id+'/changepassword',
    { NewPassword : this.state.cos},
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
      <Form onSubmit={this.handleSubmit}>
      <FormItem>
        <label>Nowe haslo: <input type="password" name="this.state.cos" onChange={this.handleCosChange} /></label>
      </FormItem>
      <input type="submit" value="Zmien"/>
    </Form>
        <center> <output>{this.state.error}  </output></center>
    </div>
    );
  }
}

export default SetPassword;