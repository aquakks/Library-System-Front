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
import SuccesOrederBook from './OrderBook/SuccesOrderBook';
import Editor from './AdminPanel/Users/Editor';
import EditorBefore from './AdminPanel/Users/EditorBefore';
import Delete from './AdminPanel/Users/Delete';
import AuthorDelete from './AdminPanel/Author/AuthorDelete';
import AuthorEditor from './AdminPanel/Author/AuthorEditor';
import AuthorEditorBefore from './AdminPanel/Author/AuthorEditorBefore';
import UserOrderPreview from './UserOrderPreview';
import BookDelete from './AdminPanel/Books/BookDelete';
import BookEditBefore from './AdminPanel/Books/BookEditorBefore';
import BookEditor from './AdminPanel/Books/BookEditor';
import AdminAuthorBook from './AdminPanel/Books/AdminAuthorBook';

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
        <Route path="/admin/authoreditbefore/:id" component={AuthorEditorBefore}/>
        <Route path="/admin/authoredit/:id" component={AuthorEditor}/>
        <Route path="/admin/authordelete/:id" component={AuthorDelete}/>
        <Route path="/admin/bookdelete/:id" component={BookDelete}/>
        <Route path="/admin/bookeditbefore/:id" component={BookEditBefore}/>
        <Route path="/admin/bookedit/:id" component={BookEditor}/>
        <Route path="/orders" component={UserOrderPreview}/>
        <Route path="/admin/test" component={AdminAuthorBook}/>
      </div>
    </Router>
    );
  }
}

export default App;
