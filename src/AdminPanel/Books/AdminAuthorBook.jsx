import React from 'react';
import { Side } from "../SideNav/Side";
import { Book2 } from "./Book2";
import { BookAuthor } from './BookAuthor';




const AdminAuthorBook = () => {
  return (
    <div className="App">    
      <div class="row">
        <div class="rightcolumn"><Side /></div>
        <div class="leftcolumn"><BookAuthor /></div>
      </div>
    </div>
  );
}

export default AdminAuthorBook;