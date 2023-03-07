import { Component } from 'react';

class ContactsForm extends Component {
    render() {
        const { name, handleChange, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );

    }

}

export default ContactsForm;