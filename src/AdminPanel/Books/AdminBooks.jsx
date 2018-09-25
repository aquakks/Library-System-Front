import React from 'react';
import { Side } from "../SideNav/Side";
import { Book2 } from "./Book2";
import { SearchBook } from './SearchBook';




const AdminBooks = () => {
  return (
    <div className="App">    
      <div class="row">
      <SearchBook />
        <div class="rightcolumn"><Side /></div>
        <div class="leftcolumn"><Book2 /></div>
      </div>
    </div>
  );
}

export default AdminBooks;