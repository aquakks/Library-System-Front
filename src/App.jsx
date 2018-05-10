import * as React from "react";
import { ContactsList } from "./ContactsList";
import { AppHeader } from "./AppHeader";

export class App extends React.Component {
  state = {
    contacts: null
  };

  componentDidMount() {
       fetch('http://localhost:5000/users/email1@email.com')
	   //https://jsonplaceholder.typicode.com/users
	   //https://randomuser.me/api/?format=json&results=1
	   //Te działaja, tylko zmien w contactlist parametry
      .then(res => res.json())
      .then((json) => this.setState({contacts: json}))
      .catch((err) => {
        return console.log("We have problem with fetch, code of error" + err);
      })
  }

  render() {
    const contacts = this.state.contacts;

    return (
      <div>
        <AppHeader />
        <main className="ui main text container">
          {contacts ? <ContactsList contacts={contacts} /> : 'Ładowanie…'}
        </main>
      </div>
    );
  }
}
