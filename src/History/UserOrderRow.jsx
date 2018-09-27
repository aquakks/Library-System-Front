import './UserOrderRow.css';
import * as React from "react";
import Moment from 'react-moment';


//Item

export const UserOrderRow = ({ idBook, startDate, endDate, penalty, ext}) => {
  return (
<div>
<table className="brw" width="80%">
    <tbody>
      <tr>
        <td className="idBook">{idBook}</td>
        <td className="endDate">    <Moment format="YYYY/MM/DD">
                {endDate}
            </Moment></td>
		    <td className="penalty">{penalty}</td>
        <td className="ext">{ext}</td>
      </tr>
    </tbody>
  </table>
</div>  
  );
};