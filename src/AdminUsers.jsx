import React from 'react';
import { Side } from "./Side";
import { User} from "./User";



const AdminUsers = () => {
  return (
    <div className="App">
    <div class="row">
    <div class="rightcolumn"><Side /></div>
<div class="leftcolumn"><User /></div>
</div>
     </div>
  );
}

export default AdminUsers;