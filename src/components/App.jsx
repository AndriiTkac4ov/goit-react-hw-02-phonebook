import { Component } from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import { nanoid } from "nanoid";
import { Application, ApplicationTitle, ListTitle } from "./App.styled";

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }

  isContactNameInList = contactName => {
    return this.state.contacts.find(contact => contact.name === contactName);
  }

  addContact = ({ name, number }, reset) => {
    if (this.isContactNameInList(name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    }
    
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts]
    }))

    reset()
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
      <Application>
        <ApplicationTitle>Phonebook</ApplicationTitle>
        <ContactForm
          onSubmit={this.addContact}
        />

        <ListTitle>Contacts</ListTitle>
        <Filter
          value={this.state.filter}
          onChange={this.changeFilter}
        />
        <ContactList
          contacts={filteredContacts}
          onDelete={this.deleteContact}
        />
      </Application>
    )
  }
};

export default App;