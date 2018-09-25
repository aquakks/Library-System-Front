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
        <a href="/bookcat" onClick={some("Fantasy")} class="list-group-item list-group-item-action">Przygodowe</a>
        <a href="/bookcat" onClick={some("Science fiction")} class="list-group-item list-group-item-action">Sci-Fi</a>
        <a href="/bookcat" onClick={some("Filozofia")} class="list-group-item list-group-item-action">Filozofia</a>
        <a href="/bookcat" onClick={some("Bajki")} class="list-group-item list-group-item-action">Bajki</a>
        <a href="/bookcat" onClick={some("Fantasy")} class="list-group-item list-group-item-action">Dla doroslych</a>
      </ul>
</tr>
      </table>
      </div>
      </div>
        )
        }
    };   
    export default RightMenu;
