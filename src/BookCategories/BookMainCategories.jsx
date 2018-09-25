import React from 'react';
import { Head } from "../Head";
import { Book } from "./Book";
import { RightMenu } from '../RightMenu';
import { Footer } from '../Footer';
import { BooksList } from "./BooksList";
import { BookCategories } from './BookCategories';

const BookMainCategories = () => {
  return (
    <div className="App">
    <Head />
    <div class="row">
    <div class="rightcolumn"><RightMenu /></div>
<div class="leftcolumn"><BookCategories /></div>
</div>
       <Footer />
     </div>
  );
}

export default BookMainCategories;