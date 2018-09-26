import React, { Component } from "react";
import { Head } from "../Head";
import { Footer } from '../Footer';
import axios from 'axios';
import { Form } from 'antd';

let id = localStorage.getItem('id');
let book = localStorage.getItem('book');
let email = localStorage.getItem('email');
let bookid = localStorage.getItem('bookid');
let token = localStorage.getItem('token');

const FormItem = Form.Item;

class OrderBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }




  handleSubmit = event => {
    event.preventDefault();

    axios.post('http://localhost:5000/borrows',
    { BookId : bookid},    
    {headers: {
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + token}})
    .then(response => {
      console.log(response);
      console.log(response.data) 
      window.location = "/succesorderbook"
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
          <p></p>
         <center> Czy na pewno chcesz zamowic ksiazke :  
       <strong> {" "+ book} </strong>  na swoje konto?</center>
      <Form onSubmit={this.handleSubmit}>
        <input type="submit" value="Tak"/>
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

export default OrderBook;