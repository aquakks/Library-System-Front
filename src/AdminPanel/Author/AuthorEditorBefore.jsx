import React from 'react';
import axios from 'axios';





export default class AuthorEditBefore extends React.Component {
  state = {
    authors : [],
    id : '',
    name : '',
    surname : '',
    birthYear : '',
    nationality : ''
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/authors/`+ this.props.match.params.id)
      .then(res => {
        const authors = res.data;
        this.setState({ 
          id: authors.authorId,
        name : authors.name,
        surname : authors.surname,
        birthYear : authors.birthYear,
        nationality : authors.nationality
      });
      localStorage.setItem('editid', this.state.id);
      localStorage.setItem('editbirthYear', this.state.birthYear);  
      localStorage.setItem('editnationality', this.state.nationality);  
      localStorage.setItem('editname', this.state.name); 
      localStorage.setItem('editsurname', this.state.surname);   
  } )
}


  render() {
    return (

<div>
   Co chcesz zrobić? :
   
   <p></p>
   <a href={"/admin/authoredit/"+this.props.match.params.id}>Edytuj autora</a>
   <p></p>
   <a href={"/admin/authordelete/"+this.props.match.params.id}>Usun autora</a>

</div>
    )
  }
}