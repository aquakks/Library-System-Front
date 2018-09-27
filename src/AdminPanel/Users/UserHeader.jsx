import { UserRow } from "./UserRow";
import './UserHeader.css';
import * as React from "react";


export class UserHeader extends React.Component {
  userToUserRow= user => {
  console.log(user);
	const id = user.id;
	const email = user.email;
	const name = user.name;
	const surname = user.surname;
	const role = user.role;
  const created = user.createdAt;
  const updated = user.updatedAt;
    return <UserRow id={id} email={email} name={name} surname={surname} role={role} created={created} updated={updated} />;
  };

  render() {
    return (    
    <div>
    <table className="usersH">
    <tr>
      <th className="id">id</th>
      <th className="email">email</th>
      <th className="name">imię</th>
      <th className="surname">nazwisko</th>
      <th className="created">zaaktualizowano</th>
      <th className="role">rola</th>
      <th className="updated">nowe haslo</th>
      <th className="edit">edytuj</th>
      <th className="delete">usuń</th>
    </tr>  
    </table>
    <ul className="ui relaxed divided list selection">
        {this.props.users.map(this.userToUserRow)}
    </ul>
    </div>
    );
};
}