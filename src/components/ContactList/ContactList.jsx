import { Component } from 'react';
import PropTypes from 'prop-types';

class ContactList extends Component {
  static propTypes = {
    visibleContacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ).isRequired,
    onDeleteContact: PropTypes.func.isRequired,
  };

  
  render() {
    const { visibleContacts, onDeleteContact } = this.props;

    return (
      <div>
        <ul>
          {visibleContacts.map(visibleContact => (
            <li key={visibleContact.id}>
              {visibleContact.name}: {visibleContact.number}
              <button
                type="button"
                onClick={() => onDeleteContact(visibleContact.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ContactList;
