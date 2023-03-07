import { Component } from 'react';

class ContactsList extends Component {
    render() {
        const { contacts } = this.props;

        return <ul>{contacts.map(contact => (
            <li key={contact.id}>{contact.name}</li>
        ))}</ul>
    }
}

export default ContactsList;