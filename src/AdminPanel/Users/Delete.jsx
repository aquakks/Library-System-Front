import React, { Component } from "react";
import axios from 'axios';
import { Form } from 'antd';

const token = localStorage.getItem('token');
const email = localStorage.getItem('email');
const FormItem = Form.Item;
const  bodyFormData = { "val":"John"};

var config = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': "Bearer " + token}
};





class Delete extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  



delete(event) {
  fetch('http://localhost:5000/users/'+this.props.match.params.id, {
          method: 'DELETE',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': "Bearer " + token
          },
          body: JSON.stringify({
              val : 'xxx'
          })
      }).then(response => {
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
        })
  event.preventDefault();
}
      
    

  render() {
    return (
      
      <div>
      <div>
          <p></p>
         <center> Czy na pewno chcesz usunąć uzytkownika o ID :
         <strong> {this.props.match.params.id}</strong>?</center>

        <center> <output>{this.state.error}  </output></center>
        <button onClick = {this.delete.bind(this)}>DELETE</button>
    </div>
    <a>
    </a>   
    </div>
    );
  }
}

export default Delete;