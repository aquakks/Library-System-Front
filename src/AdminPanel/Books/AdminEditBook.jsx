import React from 'react';
import { Side } from "../SideNav/Side";
import BookEdit from "./BookEdit";



const AdminEditBook = () => {
  return (
    <div className="App">
    <div class="row">
    <div class="rightcolumn"><Side /></div>
<div class="leftcolumn"><BookEdit /></div>
</div>
     </div>
  );
}

export default AdminEditBook;