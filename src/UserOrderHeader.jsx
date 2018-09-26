import './UserOrderHeader.css';
import * as React from "react";
import { UserOrderRow } from "./UserOrderRow";

export class UserOrderHeader extends React.Component {
  buffer = brw => {
  console.log(brw);
	const idBook = brw.idBook;
	const startDate = brw.startDate;
	const endDate = brw.startDate;
	const penalty = brw.penalty;
    const ext = brw.extends;
    return <UserOrderRow idBook={idBook} startDate={startDate} endDate={endDate} penalty={penalty} ext={ext} />;
  };

  render() {
    return (    
    <div>
    <table className="brwH">
    <tr>
      <th className="idBook"> id książki</th>
      <th className="startDate">data wypożyczenia</th>
      <th className="endDate">data zwrotu</th>
      <th className="penalty">kara</th>
      <th className="ext">przedłużenie</th>
    </tr>  
    </table>
    <ul className="ui relaxed divided list selection">
        {this.props.borrows.map(this.buffer)}
    </ul>
    </div>
    );
};
}