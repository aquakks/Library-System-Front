import './BorrowRow.css';
import * as React from "react";
import Moment from 'react-moment';


export const BorrowRow = ({ id, userId, bookId, startDate, endDate, penalty, ext, isCompleted }) => {
  return (
<div>
<table className="borrows">
    <tbody>
      <tr>
        <td className="id">{id}</td>
        <td className="userId">{userId}</td>
        <td className="bookId">{bookId}</td>
        <td className="startDate"><Moment format="YYYY/MM/DD">
                {startDate}
            </Moment></td>
		<td className="endDate"><Moment format="YYYY/MM/DD">
                {endDate}
            </Moment></td>
		<td className="penalty">{penalty}</td>
        <td className="extends">{ext}</td>
        <td className="isCompleted">{isCompleted}</td>
      </tr>
    </tbody>
  </table>
</div>  
  );
};