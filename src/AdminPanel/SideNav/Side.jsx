import './Side.css';
import React, { Component } from 'react';



export class Side extends Component {

     render() {
      
    return (
    <div class="sidenav">
      <a href="users">Użytkownicy
      <a href="user">Dodaj użytkownika</a>
      </a>
      <a href="borrows">Wypożyczenia
      <a href="borrowscompleted">Historia wypożyczeń</a>
      <a href="borrowsuncompleted">Nieoddane</a></a>
      <a href="books">Księgozbiór
      <a href="book">Dodaj książkę</a>
      </a>
      <a href="authors">Autorzy      
      <a href="author">Dodaj autora</a>
      </a>
    </div>
    );
};
}

export default Side;