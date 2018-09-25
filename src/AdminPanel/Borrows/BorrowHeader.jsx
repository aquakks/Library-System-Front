import { BorrowRow } from "./BorrowRow";
import './BorrowHeader.css';
import * as React from "react";


export class BorrowHeader extends React.Component {
  borrowToBorrowRow= borrow => {
  console.log(borrow);
    const id = borrow.id;
	const userId = borrow.userId;
	const bookId = borrow.bookId;
	const startDate = borrow.startDate;
    const endDate = borrow.endDate;
    const penalty = borrow.penalty;
    const ext = borrow.extends;
    const isCompleted= borrow.isCompleted;
    return <BorrowRow id={id} userId={userId} bookId={bookId} startDate={startDate} endDate={endDate} penalty={penalty} ext={ext} isCompleted={isCompleted} />;
  };

  render() {
    return (    
    <div>
    <table className="borrowsH">
    <tr>
      <th className="id">id</th>
      <th className="userId">id użytkownika</th>
      <th className="bookId">id książki</th>
      <th className="startDate">wypożyczono</th>
      <th className="endDate">termin oddania</th>
      <th className="penalty">kara</th>
      <th className="extends">przedłużenie</th>
      <th className="isCompleted">zakończone</th>
    </tr>  
    </table>
    <ul className="ui relaxed divided list selection">
        {this.props.borrows.map(this.borrowToBorrowRow)}
    </ul>
    </div>
    );
};
}