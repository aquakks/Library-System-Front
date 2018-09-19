import React from 'react';
import { Side } from "./Side";
import { Book2 } from "./Book2";



const AdminBooks = () => {
  return (
    <div className="App">
    <div class="row">
    <div class="rightcolumn"><Side /></div>
<div class="leftcolumn"><Book2 /></div>
</div>
     </div>
  );
}

export default AdminBooks;