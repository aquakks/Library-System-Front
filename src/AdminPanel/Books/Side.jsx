import './Side.css';
import React, { Component } from 'react';



export class Side extends Component {

     render() {
      
    return (
    <div class="sidenav">
      <a href="users">Użytkownicy</a>
      <a href="books">Księgozbiór</a>
      <a href="#orders">Zamówienia</a>
      <a href="#messages">Zgłoszenia</a>
      <a href="#calendar">Kalendarz</a>
    </div>
    );
};
}

export default Side;