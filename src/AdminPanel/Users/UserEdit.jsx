import React from 'react';
import './UserEdit.css';


const UserEdit = () => {
  return (
<div class="container">
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
        <label for="name">Imię</label>
      </div>
      <div class="col-75">
        <input type="text" id="surname" name="name" placeholder=""/>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="surname">Nazwisko</label>
      </div>
      <div class="col-75">
        <input type="text" id="surname" name="" placeholder=""/>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="email">email</label>
      </div>
      <div class="col-75">
        <input type="text" id="surname" name="" placeholder=""/>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="role">Rola</label>
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

export default UserEdit;