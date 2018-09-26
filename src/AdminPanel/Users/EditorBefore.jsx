import React from 'react';
import axios from 'axios';





export default class EditBefore extends React.Component {
  state = {
    users : [],
    id : '',
    email :'',
    role : '',
    name : '',
    surname : '',
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/users/`+ this.props.match.params.id)
      .then(res => {
        const users = res.data;
        this.setState({ 
        id: users.id,
        role : users.role,
        email : users.email,
        name : users.name,
        surname : users.surname
      });
      localStorage.setItem('editid', this.state.id);
      localStorage.setItem('editrole', this.state.role);  
      localStorage.setItem('editemail', this.state.email);  
      localStorage.setItem('editname', this.state.name); 
      localStorage.setItem('editsurname', this.state.surname);   
  } )
}


  render() {
    return (

<div>
   Czy na pewno chcesz edytowac usera : {this.props.match.params.id}
   <a href={"/admin/useredit/"+this.props.match.params.id}>Tak</a>


</div>
    )
  }
}