import React from 'react';
import { Side } from "../SideNav/Side";
import { User} from "./User";
import { SearchUser } from './SearchUser';


const AdminUsers = () => {
  return (
    <div className="App">
    <div class="row">
    <SearchUser />
    <div class="rightcolumn"><Side /></div>
<div class="leftcolumn"><User /></div>
</div>
     </div>
  );
}

export default AdminUsers;