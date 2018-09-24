import './AddAuthorItem.css';
import React from 'react';
import axios from 'axios';
import { Form } from 'antd';

const FormItem = Form.Item;

export default class AddAuthorItem extends React.Component {

    state = {
    name: '',
    surname: '',
    birthYear: '',
    nationality: '',

  };

  handleNameChange = event => {this.setState({ name: event.target.value })}
  handleSurnameChange = event => {this.setState({ surname: event.target.value })}
  handleBirthYearChange = event => {this.setState({ birthYear: event.target.value })}
  handlenationalityChange = event => {this.setState({ nationality: event.target.value })}

  handleSubmit = event => {
    event.preventDefault();

    axios.post('http://localhost:5000/authors',
      { name: this.state.name, surname: this.state.surname, birthYear: this.state.birthYear, nationality: this.state.nationality },)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (

      <Form onSubmit={this.handleSubmit}>
        <FormItem>
          <label>Imię: <input type="text" name="this.state.name" onChange={this.handleNameChange} /></label>
        </FormItem>
        <FormItem>
          <label>Nazwisko: <input type="text" name="this.state.surname" onChange={this.handleSurnameChange} /></label><br />
        </FormItem>
        <FormItem>
          <label>Rok Urodzenia: <input type="text" name="this.state.birthYear" onChange={this.handleBirthYearChange} /></label><br />
        </FormItem>
        <FormItem>
          <label>Narodowość:  <input type="text" name="this.state.nationality" onChange={this.handlenationalityChange} /></label>
        </FormItem>
          <input type="submit" value="Dodaj autora"/>
      </Form>
    )
  }
}