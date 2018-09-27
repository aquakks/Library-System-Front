import { BorrowHeader } from "./BorrowHeader";
import React, { Component } from 'react';


export class Borrow extends Component {
    state = {
        borrows: null
      };

      componentDidMount() {
        fetch("http://localhost:5000/borrows/all/uncompleted")
          .then(res => res.json())
          .then(json => {
              let result = json.results || json;
              this.setState({ borrows: result });
              console.log(result)
            }
            );
      }

     render() {
    const borrows = this.state.borrows;
      
    return (
     <div> 
     {borrows ? <BorrowHeader borrows={borrows} /> : "Ładowanie"}
    </div>
    );
};
}
