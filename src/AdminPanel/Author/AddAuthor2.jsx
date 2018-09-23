import React from 'react';
import axios from 'axios';
import { Form } from 'antd';

const FormItem = Form.Item;

export default class AddAuthor2 extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
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

    // const userform = {name: this.state.name};
    // const surnameForm = {surname: this.state.surname};
    // const birthYearForm = {birthYear: this.state.birthYear};
    // const nationalityForm = {nationality: this.state.nationality};
    // const mobileForm = {mobile: this.state.mobile};
    // const titleForm = {title: this.state.title};

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
          <label>User Project ID:  <input type="text" name="this.state.name" onChange={this.handleNameChange} /></label>
        </FormItem>
        <FormItem>
          <label>Full Name:  <input type="text" name="this.state.surname" onChange={this.handleSurnameChange} /></label><br />
        </FormItem>
        <FormItem>
          <label>User Group:  <input type="text" name="this.state.birthYear" onChange={this.handleBirthYearChange} /></label><br />
        </FormItem>
        <FormItem>
          <label>Email:  <input type="text" name="this.state.nationality" onChange={this.handlenationalityChange} /></label>
        </FormItem>
        <button type="submit">Add</button>
      </Form>
    )
  }
}