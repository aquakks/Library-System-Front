import React from 'react';
import axios from 'axios';





export default class BooksEditBefore extends React.Component {
  state = {
    books : [],
    id : '',
    title : '',
    publisher : '',
    year : '',
    publicationDate : '',
    description : '',
    category : '',
    numberofcopies : ''

  }

  componentDidMount() {
    axios.get(`http://localhost:5000/books/`+ this.props.match.params.id)
      .then(res => {
        const books = res.data;
        this.setState({ 
          id: books.bookId,
        title : books.title,
        publisher : book.publisher,
        year : book.year,
        publicationDate : book.publicationDate,
        description : book.description,
        category : book.category,
        numberofcopies : book.numberofcopies
      });
      localStorage.setItem('editid', this.state.id);
      localStorage.setItem('edittitle', this.state.title);  
      localStorage.setItem('editpublisher', this.state.publisher);
      localStorage.setItem('edityear', this.state.year);
      localStorage.setItem('editpublicationDate', this.state.publicationDate);
      localStorage.setItem('editdescription', this.state.description);
      localStorage.setItem('editcategory', this.state.category);
      localStorage.setItem('editnoc', this.state.numberofcopies);            

  } )
}


  render() {
    return (

<div>
   Czy na pewno chcesz edytowac ksiazke?
   
   <p></p>
   <a href={"/admin/bookedit/"+this.props.match.params.id}>Tak</a>
   <p></p>

</div>
    )
  }
}