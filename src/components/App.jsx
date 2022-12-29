import { Component } from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import { nanoid } from "nanoid";

class App extends Component {
  state = {
    contacts: [],
    filter: '',
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

  changeFilter = (event) => {
    this.setState({filter: event.currentTarget.value})
  }

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  }

  render() {
    const filteredContacts = this.getFilteredContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={this.addContact}
        />
        
        <h2>Contacts</h2>
        <Filter
          value={this.state.filter}
          onChange={this.changeFilter}
        />
        <ContactList
          contacts={filteredContacts}
          onDelete={this.deleteContact}
        />
      </div>
    )
  }
};

export default App;