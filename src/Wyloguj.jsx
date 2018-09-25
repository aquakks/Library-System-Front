import React, { Component } from "react";
import  { Redirect } from 'react-router-dom'


function Usun() {
    window.localStorage.clear(); 

    return <h1>Wylogowano</h1>;
    }



  const Red= () => {
       return <Redirect to='/'  />
   }

   class Wyloguj extends React.Component {
    render () {
      return (
          <div className="application">
            <Usun />
            <Red />
          </div>
      );
    }
}

export default Wyloguj;