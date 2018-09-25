import React from 'react';
import { Side } from "../SideNav/Side";
import { Borrow } from "./Borrow";
import { SearchBorrow } from './SearchBorrow';




const AdminBorrows = () => {
  return (
    <div className="App">    
      <div class="row">
      <SearchBorrow />
        <div class="rightcolumn"><Side /></div>
        <div class="leftcolumn"><Borrow /></div>
      </div>
    </div>
  );
}

export default AdminBorrows;