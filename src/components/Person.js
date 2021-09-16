import React from 'react'

const Person = class extends React.Component {
  render() {
    const { person } = this.props;

    return (
      <p className="text-xl md:text-2xl">
        <span className="font-bold">{person.name ? person.name : ""}</span>{person.title && <span>{`, ${person.title}`}</span>}
      </p>
    )
  }
}

Person.propTypes = {
    person: {}
}

export default Person
