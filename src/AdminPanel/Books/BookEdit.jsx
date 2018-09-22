import React from 'react';
import './BookEdit.css';


const BookEdit = () => {
  return (
<div class="bookContainer">
  <form action="/action_page.php">
    <div class="row">
      <div class="col-25">
        <label for="id">Id</label>
      </div>
      <div class="col-75">
        <input type="text" id="id" name="id" placeholder=""/>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="name">Autorzy</label>
      </div>
      <div class="col-75">
        <input type="text" id="surname" name="name" placeholder=""/>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="surname">Tytuł</label>
      </div>
      <div class="col-75">
        <input type="text" id="surname" name="" placeholder=""/>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="email">Wydawnictwo</label>
      </div>
      <div class="col-75">
        <input type="text" id="surname" name="" placeholder=""/>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="role">Rok</label>
      </div>
      <div class="col-75">
        <input type="text" id="role" name="role" placeholder=""/>
      </div>      
    </div>
    <div class="row">
      <div class="col-25">
        <label for="role">Data publikacji</label>
      </div>
      <div class="col-75">
        <input type="text" id="role" name="role" placeholder=""/>
      </div>      
    </div>  
    <div class="row">
      <div class="col-25">
        <label for="role">Opis</label>
      </div>
      <div class="col-75">
        <input type="text" id="role" name="role" placeholder=""/>
      </div>      
    </div>
    <div class="row">
      <div class="col-25">
        <label for="role">Liczba kopii</label>
      </div>
      <div class="col-75">
        <input type="text" id="role" name="role" placeholder=""/>
      </div>      
    </div>  
    <div class="row">
      <input type="submit" value="Dodaj"/>
    </div>
  </form>
</div>
  );
}

export default BookEdit;