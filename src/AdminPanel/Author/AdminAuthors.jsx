import React from 'react';
import { Side } from "./Side";
import { Author } from "./Author";
import { SearchAuthor } from './SearchAuthor';




const AdminAuthors = () => {
  return (
    <div className="App">    
      <div class="row">
      <SearchAuthor />
        <div class="rightcolumn"><Side /></div>
        <div class="leftcolumn"><Author /></div>
      </div>
    </div>
  );
}

export default AdminAuthors;