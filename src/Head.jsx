import * as React from "react";

export const Head = () => {
    return (
        <header className="ui fixed menu">
            <nav class="navbar navbar-expand-md navbar-dark bg-dark">
                <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Książki</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Wypożyczenia</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Regulamin</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Inne</a>
                        </li>
                    </ul>
                </div>
                <div class="mx-auto order-0">
                    <a class="navbar-brand mx-auto" href="#">Library System</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="/login">Moje konto</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};