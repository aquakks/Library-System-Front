import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home/Home';
import { User } from "./AdminPanel/Users/User";
import BookInfo from "./BookInfo/BookInfo.jsx";
import Login from "./Login";
import AdminUsers from "./AdminPanel/Users/AdminUsers";
import AdminBooks from "./AdminPanel/Books/AdminBooks";
import AdminEditUser from "./AdminPanel/Users/AdminEditUser";
import AdminEditBook from "./AdminPanel/Books/AdminEditBook";
import AddAuthor from "./AdminPanel/Author/AddAuthor";


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
        <Route path="/booksinfo/:id" component={BookInfo}/>
        <Route path="/login" component={Login}/>
        <Route path="/admin/users" component={AdminUsers}/>
        <Route path="/admin/books" component={AdminBooks}/>
        <Route path="/admin/edituser" component={AdminEditUser}/>
        <Route path="/admin/editbook" component={AdminEditBook}/>
        <Route path="/admin/author" component={AddAuthor}/>
      </div>
    </Router>
    );
  }
}

export default App;
