import * as React from "react";
import { ContactItem } from "./ContactItem";

export class ContactsList extends React.Component {
  contactToContactItem = contact => {
    const nick = contact.name;
    const email = contact.email;
    const key = contact.email;
    return <ContactItem key={key} nick={nick} email={email} />;
  };

  render() {
    return (
      <ul className="ui relaxed divided list selection">
        {this.props.contacts.map(this.contactToContactItem)}
      </ul>
    );
  }
}
