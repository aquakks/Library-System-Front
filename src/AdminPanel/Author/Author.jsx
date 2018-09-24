import { AuthorHeader } from "./AuthorHeader";
import React, { Component } from 'react';


export class Author extends Component {
    state = {
        authors: null
      };

      componentDidMount() {
        fetch("http://localhost:5000/authors/all")
          .then(res => res.json())
          .then(json => {
              let result = json.results || json;
              this.setState({ authors: result });
              console.log(result)
            }
            );
      }

     render() {
    const authors = this.state.authors;
      
    return (
     <div> 
     {authors ? <AuthorHeader authors={authors} /> : "Ładowanie"}

    </div>
    );
};
}
