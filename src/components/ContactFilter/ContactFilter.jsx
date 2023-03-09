import { Component } from 'react';
import PropTypes from 'prop-types';

class ContactFilter extends Component {
  static propTypes = {
    filter: PropTypes.string.isRequired,
    changeFilter: PropTypes.func.isRequired,
  };
    

  render() {
    const { filter, changeFilter } = this.props;

    return (
      <label>
        Find contacts by name
        <input type="text" value={filter} onChange={changeFilter} />
      </label>
    );
  }
}

export default ContactFilter;
