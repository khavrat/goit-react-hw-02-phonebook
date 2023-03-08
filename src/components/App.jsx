import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import ContactFilter from './ContactFilter/ContactFilter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleCreateContact = newContact => {
    // console.log(newContact);
    const { contacts } = this.state;
    this.setState(state => ({
      contacts: [newContact, ...contacts],
    }));
    console.log('newContact :>> ', newContact);
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  visibleContacts() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }

  render() {
    const { filter } = this.state;
    const visibleContacts = this.visibleContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          onCreateContact={this.handleCreateContact}
        />

        <h2>Contacts</h2>
        <ContactFilter
          filter={filter}
          changeFilter={this.changeFilter}
        ></ContactFilter>

        <ContactList visibleContacts={visibleContacts} />
      </div>
    );
  }
}

export default App;
