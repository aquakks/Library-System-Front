import './Side.css';
import React, { Component } from 'react';



export class Side extends Component {

     render() {
      
    return (
    <div class="sidenav">
      <a href="users">Użytkownicy</a>
      <a href="books">Księgozbiór</a>
      <a href="authors">Autorzy</a>
      <a href="orders">Wypożyczenia</a>
    </div>
    );
};
}

export default Side;