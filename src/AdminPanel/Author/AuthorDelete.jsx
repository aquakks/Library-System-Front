import React, { Component } from "react";
import axios from 'axios';
import { Form } from 'antd';

const token = localStorage.getItem('token');
const FormItem = Form.Item;

const id = localStorage.getItem('editid');

var config = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': "Bearer " + token}
};

var body =  '{}';

class AuthorDelete extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }


  delete(event) {
    fetch('http://localhost:5000/authors/'+ id, {
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
         <center> Czy na pewno chcesz autora :  
         {this.props.match.params.id} </center>

    <button onClick = {this.delete.bind(this)}>DELETE</button>
    </div>
    <center> <output>{this.state.error}  </output></center>
    </div>
    );
  }
}

export default AuthorDelete;