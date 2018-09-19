import * as React from "react";
import './RightMenu.css';

export const RightMenu = () => {
    return (
        <div className="menu">
        <div className="well sidebar-nav">
        <h5>Kategorie :</h5>
        <table className="menu">
            <tr>
        <ul className="list-group">
        <a href="#" class="list-group-item list-group-item-action">Przygodowe</a>
        <a href="#" class="list-group-item list-group-item-action">Wojenne</a>
        <a href="#" class="list-group-item list-group-item-action">Sci-Fi</a>
        <a href="#" class="list-group-item list-group-item-action">Fantastyczne</a>
        <a href="#" class="list-group-item list-group-item-action">Inne</a>
      </ul>
</tr>
      </table>
      </div>
      </div>
  
    );
};