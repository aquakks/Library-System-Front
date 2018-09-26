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
        //axios.get('http://localhost:5000/borrows/' + id + '/all')
        axios.get('http://localhost:5000/borrows/32845f07-ac16-43de-9ea8-26529d70747a/all')
          .then(res => {
            const borrows = res.data;
            this.setState({ 
            bookId : borrows.bookId,
            startDate : borrows.startDate,
            endDate: borrows.endDate,
            penalty : borrows.penalty,
            ext : borrows.extends
          });
 
      } )
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
