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




  handleSubmit = event => {
    event.preventDefault();

    axios.delete('http://localhost:5000/books/'+ this.props.match.params.id,
 body,config)
    .then(response => {
      console.log(response);
      console.log(response.data) 
      window.location = "/admin/books"
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
         <center> Czy na pewno chcesz autora :  
         {this.props.match.params.id} </center>

      <Form onSubmit={this.handleSubmit}>
        <input type="submit" value="Tak"/>
        </Form>
    </div>
    <a>
    </a>   
    </div>
    );
  }
}

export default AuthorDelete;