import React, { Component } from "react";
import { Head } from "../Head";
import { Footer } from '../Footer';
import axios from 'axios';
import { Form } from 'antd';

let id = localStorage.getItem('id');
let book = localStorage.getItem('book');
let email = localStorage.getItem('email');
let bookid = localStorage.getItem('bookid');

const FormItem = Form.Item;

class OrderBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }




  handleSubmit = event => {
    event.preventDefault();

    axios.post('http://localhost:5000/borrows/',
    { UserID : id, BookID : bookid },    
    {headers: {
        'Content-Type': 'application/json'}})
    .then(response => {
      console.log(response);
      console.log(response.data) 
      window.location = "/succesorderbook"
})
      .catch(function (error) {
   this.setState({
        error: 'Błąd! Złe dane!'
       }); 
      }.bind(this))}
        
      
    

  render() {
    return (
      
      <div>
      <Head />
      <div>
          <p></p>
         <center> Czy na pewno chcesz zamowic ksiazke :  
         {" "+ book} na konto :  {email} </center>
         {id}
      <Form onSubmit={this.handleSubmit}>
        <input type="submit" value="Tak"/>
        </Form>
    </div>
    <a>
    <Footer /> 
    </a>   
    </div>
    );
  }
}

export default OrderBook;