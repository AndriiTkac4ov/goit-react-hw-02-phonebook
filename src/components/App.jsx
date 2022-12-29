import { Component } from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import { nanoid } from "nanoid";

class App extends Component {
  state = {
    contacts: [],
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

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        {/* <Filter ... /> */}
        <ContactList contacts={this.state.contacts}/>
      </div>
    )
  }
};

export default App;