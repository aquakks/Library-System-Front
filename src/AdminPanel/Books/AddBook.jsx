import React from 'react';
import { Side } from "./Side";
import AddBookItem from "./AddBookItem";



const AddBook = () => {
  return (
    <div className="App">
    <div class="row">
    <div class="rightcolumn"><Side /></div>
<div class="leftcolumn"><AddBookItem /></div>
</div>
     </div>
  );
}

export default AddBook;