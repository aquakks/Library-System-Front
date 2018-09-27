import React, { Component } from "react";
import {Button, FormGroup , FormControl ,ControlLabel} from "react-bootstrap"
import axios from 'axios';
import { Form } from 'antd';

let token= localStorage.getItem('token');

const FormItem = Form.Item;

class Oddaj extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }




  handleSubmit = event => {
    event.preventDefault();

    axios.put('http://localhost:5000/borrows/'+ this.props.match.params.id +'/complete',
    { email : this.state.email,
      name : this.state.name,
      surname : this.state.surname,
      role : this.state.role},
    {headers: {
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + token}})
      .then(response => {
        console.log(response);
        console.log(response.data) 
        window.location = "/admin/borrowsuncompleted"
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
          Czy chcesz oznaczyc wypozyczenie nr {this.props.match.params.id} jako oddane?
      <Form onSubmit={this.handleSubmit}>
        <input type="submit" value="Tak"/>
    </Form>
    <center> <output>{this.state.error}  </output></center>
    </div>
    <a>
    </a>   
    </div>
    );
  }
}

export default Oddaj;