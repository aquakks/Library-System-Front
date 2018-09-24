import { AuthorRow } from "./AuthorRow";
import './AuthorHeader.css';
import * as React from "react";


export class AuthorHeader extends React.Component {
  authorToAuthorRow= author => {
  console.log(author);
  const authorId = author.authorId;
	const name = author.name;
	const surname = author.surname;
	const birthYear = author.birthYear;
    const nationality = author.nationality;
    return <AuthorRow authorId={authorId} name={name} surname={surname} birthYear={birthYear} nationality={nationality} />;
  };

  render() {
    return (    
    <div>
    <table className="authorsH">
    <tr>
      <th className="id">id</th>
      <th className="name">imię</th>
      <th className="surname">nazwisko</th>
      <th className="birth">rok urodzenia</th>
      <th className="nationality">narodowość</th>
      <th className="edit">edytuj</th>
      <th className="delete">usuń</th>
    </tr>  
    </table>
    <ul className="ui relaxed divided list selection">
        {this.props.authors.map(this.authorToAuthorRow)}
    </ul>
    </div>
    );
};
}