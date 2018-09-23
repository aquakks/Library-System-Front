import React from 'react';
import axios from 'axios';



export default class AddAuthor extends React.Component {
  state = {
    name: '',
    surname: '',
    birthYear: '',
    nationality: '',
  }




  handleChange = event => {
    this.setState({ name: event.target.value });
    this.setState({ surname: event.target.value });
    this.setState({ birthYear: event.target.birthYear });
    this.setState({ nationality: event.target.value });
  }


  handleSubmit = event => {
    event.preventDefault();



    axios.post(`http://localhost:5000/authors`,
     {
        name : this.state.name,
        surname : this.state.surname,
        birthYear : this.state.birthYear,
        nationality : this.state.nationality },
        {headers: {'Content-Type': 'application/json'}
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
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} /></label>
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