import * as React from "react";

export const AppHeader = () => {
  return (
    <header className="ui fixed menu">
      <nav className="ui container">
        <a href="" className="header item">
          Lista czytelnikow
        </a>
        <div className="header item">
          <button className="ui button">Dodaj</button>
        </div>
      </nav>
    </header>
  );
};
