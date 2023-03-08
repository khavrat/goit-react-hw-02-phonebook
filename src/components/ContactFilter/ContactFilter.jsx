import { Component } from 'react';

class ContactFilter extends Component {
  render() {
      const { filter, changeFilter } = this.props;
    //   console.log(filter);
      
    return (
      <label>
        Find contacts by name
        <input
          type="text"
          value={filter}
          onChange={changeFilter}
        />
      </label>
    );
  }
}

export default ContactFilter;
