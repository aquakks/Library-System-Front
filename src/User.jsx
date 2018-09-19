import './User.css';
import { UserHeader } from "./UserHeader";
import React, { Component } from 'react';


export class User extends Component {
    state = {
        users: null
      };

      componentDidMount() {
        fetch("http://localhost:5000/users/all")
          .then(res => res.json())
          .then(json => {
              let result = json.results || json;
              this.setState({ users: result });
              console.log(result)
            }
            );
      }

     render() {
    const users = this.state.users;
      
    return (
     <div> 
     {users ? <UserHeader users={users} /> : "Pobieranie listy"}

    </div>
    );
};
}