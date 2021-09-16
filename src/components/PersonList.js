import PropTypes from 'prop-types'
import React from 'react'

import Person from '../components/Person';

const PersonList = class extends React.Component {
  render() {
    const { persons, role } = this.props;

    return (
      <div className="pt-12">
        <div className="font-bold pb-2 flex">
          <div className="text-brown-500 pr-2">■</div>
          <div className="relative" style={{top: "0.125rem"}}>{role ? role : ""}</div>
        </div>
        {persons && persons.map(person => <Person person={person} />)}
      </div>
    )
  }
}

PersonList.propTypes = {
  persons: PropTypes.array
}

export default PersonList
