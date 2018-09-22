import React from 'react';
import { Head } from "../Head";
import { Book } from "./Book";
import { RightMenu } from '../RightMenu';
import { Footer } from '../Footer';
import { BooksList } from "./BooksList";

const Home = () => {
  return (
    <div className="App">
    <Head />
    <div class="row">
    <div class="rightcolumn"><RightMenu /></div>
<div class="leftcolumn"><Book /></div>
</div>
       <Footer />
     </div>
  );
}

export default Home;