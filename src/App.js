import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import { User } from './User';
import BookInfo from './BookInfo';
import Login from "./Login";
import AdminUsers from "./AdminUsers";
import AdminBooks from "./AdminBooks";
import AdminEditUser from "./AdminEditUser";

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="container">
        <Route exact path="/" component={Home} />
        <Route path="/user/:id" component={User}/>
        <Route path="/bookinfo/:id" component={BookInfo}/>
        <Route path="/login" component={Login}/>
        <Route path="/admin/users" component={AdminUsers}/>
        <Route path="/admin/books" component={AdminBooks}/>
        <Route path="/admin/edituser" component={AdminEditUser}/>
      </div>
    </Router>
    );
  }
}

export default App;
