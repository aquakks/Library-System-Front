import * as React from "react";
import { Head } from "./Head";
import { Footer } from './Footer';

const Edit = () => {
    const login = localStorage.getItem('email');
    return (
        <div> <Head />
      <div>Jesteś zalogowany jako : {login} </div>
 <Footer />
      </div>
    );
};
export default Edit;