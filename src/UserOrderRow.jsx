import './UserOrderRow.css';
import * as React from "react";


//Item

export const UserOrderRow = ({ idBook, startDate, endDate, penalty, ext}) => {
  return (
<div>
<table className="brw" width="80%">
    <tbody>
      <tr>
        <td className="idBook">{idBook}</td>
        <td className="startDate">{startDate}</td>
        <td className="endDate">{endDate}</td>
		<td className="penalty">{penalty}</td>
        <td className="ext">{ext}</td>
      </tr>
    </tbody>
  </table>
</div>  
  );
};