import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import ContactFilter from './ContactFilter/ContactFilter';
import { Phonebook, PhonebookTitle, ContactsTitle } from './App.styled';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleCreateContact = newContact => {
    const { contacts } = this.state;

    if (
      contacts.find(
        contact =>
          contact.name.toLocaleLowerCase() ===
          newContact.name.toLocaleLowerCase()
      )
    ) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      this.setState(prevState => ({
        contacts: [newContact, ...prevState.contacts],
      }));
    }
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
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
      <Phonebook>
        <PhonebookTitle>Phonebook</PhonebookTitle>
        <ContactForm onCreateContact={this.handleCreateContact} />

        <ContactsTitle>Contacts</ContactsTitle>
        <ContactFilter
          filter={filter}
          changeFilter={this.changeFilter}
        ></ContactFilter>

        <ContactList
          visibleContacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </Phonebook>
    );
  }
}

export default App;
