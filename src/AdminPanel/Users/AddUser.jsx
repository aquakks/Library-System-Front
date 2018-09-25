import React from 'react';
import { Side } from "../SideNav/Side";
import AddUserItem from "./AddUserItem";



const AddBook = () => {
  return (
    <div className="App">
    <div class="row">
    <div class="rightcolumn"><Side /></div>
<div class="leftcolumn"><AddUserItem /></div>
</div>
     </div>
  );
}

export default AddBook;