import { Component } from "react";
import { nanoid } from "nanoid";
import { ContactForm } from "./ContactForm/ContactForm"

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  }

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        {/* <Filter ... />
        <ContactList ... /> */}
</div>
    )
  }
};

export default App;