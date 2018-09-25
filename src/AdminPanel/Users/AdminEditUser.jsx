import React from 'react';
import { Side } from "../SideNav/Side";
import UserEdit from "./UserEdit";



const AdminEditUser = () => {
  return (
    <div className="App">
    <div class="row">
    <div class="rightcolumn"><Side /></div>
<div class="leftcolumn"><UserEdit /></div>
</div>
     </div>
  );
}

export default AdminEditUser;