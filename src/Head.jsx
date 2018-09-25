import * as React from "react";



function Gosc() {
    return (
        <li className="nav-item">
        <a className="nav-link" href="/login">Moje konto</a>
    </li>
    );
  }

  function Loged() {
    const login = localStorage.getItem('email');
    return (
        <li className="nav-item">
        <a className="nav-link" href="/edit">Zalogowany jako: {login}</a> 
        <a className="nav-link" href="/wyloguj">Wyloguj</a>
    </li>
       
    );
  }


function Sprawdz() {
    const isLoggedIn = localStorage.getItem('token');
    if (isLoggedIn==null) {
      return <Gosc />;
    }
    return <Loged />;
  }


export const Head = () => {
    return (
        <header className="ui fixed menu">
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/books">Książki</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/orders">Wypożyczenia</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/regulamin">Regulamin</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Inne</a>
                        </li>
                    </ul>
                </div>
                <div className="mx-auto order-0">
                    <a className="navbar-brand mx-auto" href="#">Library System</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                    <ul className="navbar-nav ml-auto">
                        <Sprawdz />
                    </ul>
                </div>
            </nav>
        </header>
    );
};