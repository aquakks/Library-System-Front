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

var body =  '{}';

class Delete extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }




  handleSubmit = event => {
    event.preventDefault();

    axios.delete('http://localhost:5000/users/'+ this.props.match.params.id,
 body,config)
    .then(response => {
      console.log(response);
      console.log(response.data) 
      window.location = "/admin/users"
})
      .catch(function (error) {
   this.setState({
        error: 'Błąd! Złe dane!'
       }); 
      }.bind(this))}
        
      
    

  render() {
    return (
      
      <div>
      <div>
          <p></p>
         <center> Czy na pewno chcesz usunąć uzytkownika o ID :
         <strong> {this.props.match.params.id}</strong>?</center>

      <Form onSubmit={this.handleSubmit}>
        <input type="submit" value="Tak"/>
        <a type="submit" href="/admin/users" role="button">Nie</a>
        </Form>
    </div>
    <a>
    </a>   
    </div>
    );
  }
}

export default Delete;