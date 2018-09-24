import * as React from "react";
import  { Redirect } from 'react-router-dom'


function Usun() {
    localStorage.clear();
  }



  const Red= () => {
       return <Redirect to='/'  />
   }

export const Wyloguj = () => {
    return (
     <div>
    <Usun />
    <Red />
    Wylogowano!
     </div>
    );
};

export default Wyloguj;