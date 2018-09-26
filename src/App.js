import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home/Home';
import { User } from "./AdminPanel/Users/User";
import BookInfo from "./BookInfo/BookInfo.jsx";
import Login from "./Login";
import Test from "./Test";
import Edit from "./Edit";
import Wyloguj from "./Wyloguj";
import AdminUsers from "./AdminPanel/Users/AdminUsers";
import AdminBooks from "./AdminPanel/Books/AdminBooks";
import AdminAuthors from "./AdminPanel/Author/AdminAuthors";
import AdminBorrows from "./AdminPanel/Borrows/AdminBorrows";
import AdminEditUser from "./AdminPanel/Users/AdminEditUser";
import AdminEditBook from "./AdminPanel/Books/AdminEditBook";
import AddAuthor from "./AdminPanel/Author/AddAuthor";
import AddBook from "./AdminPanel/Books/AddBook";
import AddUser from "./AdminPanel/Users/AddUser";
import {Booking} from './BookCategories/Booking';
import OrderBook from './OrderBook/OrderBook';
import SuccesOrederBook from './OrderBook/SuccesOrderBook'
import Editor from './AdminPanel/Users/Editor'
import EditorBefore from './AdminPanel/Users/EditorBefore'
import Delete from './AdminPanel/Users/Delete'
<<<<<<< HEAD
import AuthorDelete from './AdminPanel/Author/AuthorDelete'
import AuthorEditor from './AdminPanel/Author/AuthorEditor'
import AuthorEditorBefore from './AdminPanel/Author/AuthorEditorBefore'
=======
import { UserOrder } from './UserOrder'
>>>>>>> f82f137b7c04a314d5409797db39aa2e3fbab8a0

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
        <Route path="/test" component={Test}/>
        <Route path="/admin/users" component={AdminUsers}/>
        <Route path="/admin/books" component={AdminBooks}/>
        <Route path="/admin/authors" component={AdminAuthors}/>
        <Route path="/admin/borrows" component={AdminBorrows}/>
        <Route path="/admin/edituser" component={AdminEditUser}/>
        <Route path="/admin/editbook" component={AdminEditBook}/>
        <Route path="/admin/author" component={AddAuthor}/>
        <Route path="/admin/book" component={AddBook}/>
        <Route path="/admin/user" component={AddUser}/>
        <Route path="/wyloguj" component={Wyloguj}/>
        <Route path="/edit" component={Edit}/>
        <Route path="/bookcat/:id" component={Booking}/>
        <Route path="/orderbook" component={OrderBook}/>
        <Route path="/succesorderbook" component={SuccesOrederBook}/>
        <Route path="/admin/usereditbefore/:id" component={EditorBefore}/>
        <Route path="/admin/useredit/:id" component={Editor}/>
        <Route path="/admin/userdelete/:id" component={Delete}/>
<<<<<<< HEAD
        <Route path="/admin/authoreditbefore/:id" component={AuthorEditorBefore}/>
        <Route path="/admin/authoredit/:id" component={AuthorEditor}/>
        <Route path="/admin/authordelete/:id" component={AuthorDelete}/>
=======
        <Route path="/order/test" component={UserOrder}/>
>>>>>>> f82f137b7c04a314d5409797db39aa2e3fbab8a0
      </div>
    </Router>
    );
  }
}

export default App;
