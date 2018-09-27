import './UserOrderHeader.css';
import * as React from "react";
import { UserOrderRow } from "./UserOrderRow";

//List

export class UserOrderHeader extends React.Component {
  borrowToBorrowItem = borrow => {
  console.log(borrow);
  const idBook = borrow.borrowId;
  const title = borrow.bookTitle;
	const startDate = borrow.startDate;
	const endDate = borrow.endDate;
	const penalty = borrow.penalty;
  const ext = borrow.extends;
    return <UserOrderRow idBook={idBook} startDate={startDate} title={title} endDate={endDate} penalty={penalty} ext={ext} />;
  };

  render() {
    return (    
    <div>
    <table className="brwH">
    <tr>
      <th className="idBook"> tytuł </th>
      <th className="endDate">data zwrotu</th>
      <th className="penalty">kara</th>
      <th className="ext">przedłużenie</th>
      <th className="btext"> </th>
    </tr>  
    </table>
    <ul className="ui relaxed divided list selection">
        {this.props.borrows.map(this.borrowToBorrowItem)}
    </ul>
    </div>
    );
};
}