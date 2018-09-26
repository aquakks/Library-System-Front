import React, { Component } from "react";
import './RightMenu.css';




function some(kat) {
    localStorage.setItem('category',kat);
          }

class RightMenu extends React.Component {
    constructor(props) {
        super(props);
     //   this.onClick = this.onClick.bind(this);
      }



      render() {
        return (
        <div className="menu">
        <div className="well sidebar-nav">
        <h5>Kategorie :</h5>
        <table className="menu">
            <tr>
        <ul className="list-group">
        <a href="/bookcat/Filozofia" class="list-group-item list-group-item-action">Filozofia</a>
        <a href="/bookcat/Fantasy" class="list-group-item list-group-item-action">Fantasy</a>
        <a href="/bookcat/Erotyki" class="list-group-item list-group-item-action">Erotyki</a>
        <a href="/bookcat/Bajki" class="list-group-item list-group-item-action">Bajki</a>
        <a href="/bookcat/Science fiction" class="list-group-item list-group-item-action">Sci-Fi</a>
      </ul>
</tr>
      </table>
      </div>
      </div>
        )
        }
    };   
    export default RightMenu;
