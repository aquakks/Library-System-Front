import React from 'react';
import { Side } from "../SideNav/Side";
import AddAuthorItem from "./AddAuthorItem";



const AddAuthor = () => {
  return (
    <div className="App">
    <div class="row">
    <div class="rightcolumn"><Side /></div>
<div class="leftcolumn"><AddAuthorItem /></div>
</div>
     </div>
  );
}

export default AddAuthor;