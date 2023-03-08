import { Component } from 'react';

class ContactList extends Component {

  render() {
    const { visibleContacts } = this.props;

    return (
      <div>
        <ul>
          {visibleContacts.map(visibleContact => (
            <li key={visibleContact.id}>
              {visibleContact.name}: {visibleContact.number}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ContactList;
