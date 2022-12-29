import { Component } from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import { nanoid } from "nanoid";

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    name: '',
    number: '',
  }

  addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    }
    
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts]
    }))
  }

  deleteContact = (userId) => {
    console.log(userId);
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== userId)
    })
    )
  }

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={this.addContact}
        />

        <h2>Contacts</h2>
        {/* <Filter ... /> */}
        <ContactList
          contacts={this.state.contacts}
          onDelete={this.deleteContact}
        />
      </div>
    )
  }
};

export default App;