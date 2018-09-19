import React from 'react';
import { Side } from "./Side";
import { Book2 } from "./Book2";
import { Search } from './Search';




const AdminBooks = () => {
  return (
    <div className="App">    
      <div class="row">

      <Search />
        <div class="rightcolumn"><Side /></div>
        <div class="leftcolumn"><Book2 /></div>
      </div>
    </div>
  );
}

export default AdminBooks;