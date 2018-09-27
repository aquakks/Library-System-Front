import './BookItem.css';
import * as React from "react";


export const BookItem = ({ avatarUrl, rok, idb, desc, ilosc, name, phone }) => {
  return (
<div class="bookView">
<table className="bookView" align="right" name = "home" border="0" width="100%" cellspacing="0" cellpadding="5">
<tbody>
<tr valign="middle">
<td align="center" width="100"><img src="https://iv.pl/images/60321544415060693697.png" /></td>
<td align="center" width="200">
<div>
<h2>{name}</h2>
</div>
<div><a href="#"></a></div>
<div>{phone}</div>
<div>Rok wydania : <strong>{rok}</strong><br />Dostępne : <strong>{ilosc}</strong></div>
</td>

<td align="center" width="100" height="160"><a href={'/booksinfo/' + name }>Zobacz wiecej.</a>
</td>
</tr>
</tbody>
</table>
</div>
  );
};