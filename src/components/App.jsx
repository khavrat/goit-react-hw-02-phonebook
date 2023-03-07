import { Component } from 'react';
import shortid from 'shortid';
import ContactsForm from './ContactsForm/ContactsForm';
import ContactsList from './ContactsList/ContactsList';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleChange = e => {
    console.log(e.currentTarget.value);
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  // reset = () => {
  //   this.setState({ name: '' });
  // };

  handleSubmit = e => {
    e.preventDefault();

    const newContact = {
      id: shortid.generate(),
      name: this.state.name,
    };

    this.setState(state => ({
      contacts: [newContact, ...state.contacts],
      name: '',
    }));
    console.log('contacts :>> ', this.state.contacts);

    console.log(newContact);

  };

  render() {
    const { contacts, name } = this.state;

    return (
      <div>
        <h2>Phonebook</h2>
        <ContactsForm
          name={name}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <ContactsList contacts={contacts} />
      </div>
    );
  }
}

export default App;
