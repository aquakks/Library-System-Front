import { UserOrderHeader } from "./UserOrderHeader";
import React, { Component } from 'react';
import axios from 'axios';

const id = localStorage.getItem('id');

export class UserOrder extends Component {
    state = {
        borrows : [],
        bookId : '',
        startDate : '',
        endDate : '',
        penalty : '',
        ext : '',
      };



      componentDidMount() {
        fetch('http://localhost:5000/borrows/' + id + '/all')
        .then(res => res.json())
        .then(json => {
            let result = json.results || json;
            this.setState({ books: result });
            console.log(result)
          }
          );
    }

     render() {
    const borrows = this.state.borrows;
      
    return (
        <div>
        {borrows ? <UserOrderHeader borrows={borrows} /> : 'Ładowanie…'} 
        </div>
    );
};
}
