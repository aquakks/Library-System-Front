import './App.css';
import React from 'react';
import logo from './logo.svg';
import { User} from "./User";
import { Side } from "./Side";


const UserAdmin = () => {
  return (
    <div className="App">
    <div class="row">
    <div class="rightcolumn"><Side /></div>
<div class="leftcolumn"><User /></div>
</div>
     </div>
  );
}

export default UserAdmin;