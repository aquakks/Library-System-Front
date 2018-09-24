import './AddUserItem.css';
import React from 'react';
import axios from 'axios';
import { Form } from 'antd';

const FormItem = Form.Item;

export default class AddUserItem extends React.Component {
  
  state = {
    email: '',
    name: '',
    surname: '',
    role: '',
  };

  handleEmailChange = event => {this.setState({ email: event.target.value })}
  handleNameChange = event => {this.setState({ name: event.target.value })}
  handleSurnameChange = event => {this.setState({ surname: event.target.value })}
  handleRoleChange = event => {this.setState({ role: event.target.value })}

  handleSubmit = event => {
    event.preventDefault();

    axios.post('http://localhost:5000/users',
      { email: this.state.email, name: this.state.name, surname: this.state.surname, role: this.state.role},)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (

      <Form onSubmit={this.handleSubmit}>
        <FormItem>
          <label>Email: <input type="text" name="this.state.email" onChange={this.handleEmailChange} /></label><br />
        </FormItem>
        <FormItem>
          <label>Imię: <input type="text" name="this.state.name" onChange={this.handleNameChange} /></label><br />
        </FormItem>
        <FormItem>
          <label>Nazwisko: <input type="text" name="this.state.surname" onChange={this.handleSurnameChange} /></label>
        </FormItem>
        <FormItem>
          <label>Rola: <input type="text" name="this.state.role" onChange={this.handleRoleChange} /></label>
        </FormItem>
          <input type="submit" value="Dodaj użytkownika"/>
      </Form>
    )
  }
}