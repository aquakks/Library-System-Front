import React from 'react';
import axios from 'axios';



export default class AddAuthor extends React.Component {
  state = {
    name: '',
    surname: '',
    birthYear: '',
    nationality: '',
  }


  handleUserIDChange = event => {this.setState({ userid: event.target.value })}

  //handleChange = event => {
   // this.setState({ name: event.target.value }),
   // this.setState({ surname: event.target.value, }),
    //this.setState({ birthYear: event.target.value,}),
    //this.setState({ nationality: event.target.value, })
  //}

  handlenameChange = event => {this.setState({ name: event.target.value })}
  handlesurnameChange = event => {this.setState({ surname: event.target.value })}
  handlebirthYearChange = event => {this.setState({ birthYear: event.target.value })}
  handlenationalityChange = event => {this.setState({ nationality: event.target.value })}

  handleSubmit = event => {
    event.preventDefault();

    //const author = {
     // name: this.state.name,
      //surname: this.state.surname,
      //birthDate: this.state.birthDate,
      //nationality: this.state.nationality
    //};

    axios.post(`http://localhost:5000/authors`, {   
        headers: {'Content-Type': 'application/json'}, 
        name : this.state.name,
        surname : this.state.surname,
        birthYear : this.state.birthYear,
        nationality : this.state.nationality
       // body: {
      //  'name': this.state.name,
       // 'surname': this.state.surname,
       // 'birthYear': this.state.birthYear,
       // 'nationality': this.state.nationality
      //  }
     })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name : 
            <input type="text" name="this.state.name" onChange={this.handleChange} /></label>
          <label>
            Surname :
            <input type="text" name="this.state.surname" onChange={this.handleChange} /></label>

          <label>
            Birth    :      
            <input type="text" name="this.state.birthYear" onChange={this.handleChange} /></label>

          <label>
            Nation 
            <input type="text" name="this.state.nationality" onChange={this.handleChange} /></label>

          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}