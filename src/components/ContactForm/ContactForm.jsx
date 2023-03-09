import { Component } from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';


class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  static propTypes = {
    onCreateContact: PropTypes.func.isRequired,
  };


  handleChange = e => {
    console.log(e.currentTarget.value);
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };


  reset = () => {
    this.setState({ name: '', number: '' });
  };


  getNewContact = () => {
    const { name, number } = this.state;

    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };
    return newContact;
  };


  handleSubmit = e => {
    const { onCreateContact } = this.props;
    e.preventDefault();

    const newContact = this.getNewContact();
    onCreateContact(newContact);

    this.reset();
  };

  
  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            className="input"
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={this.handleChange}
            required
          />
        </label>
        <label>
          Number
          <input
            className="input"
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={this.handleChange}
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
