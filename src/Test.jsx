import React from 'react';
import axios from 'axios';

let email = localStorage.getItem('email');





export default class Test extends React.Component {
  state = {
    users : [],
    id : '',
    role : ''
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/users/`+ email)
      .then(res => {
        const users = res.data;
        this.setState({ 
          id: users.id,
        role : users.role
      });
      localStorage.setItem('id', this.state.id);
      localStorage.setItem('role', this.state.role);  
  } )
}


  render() {
    return (

<div>
    Zostałeś zalogowany. Przejdz na glowna.
  <p> <a href="/">Kliknij tutaj aby przejsc na strone glowna.</a></p> 

</div>
    )
  }
}