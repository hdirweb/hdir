import React from 'react'

import PersonList from '../components/PersonList';

const Structure = class extends React.Component {
  render() {
    const { roles, show, title } = this.props.structure;

    if (!show)
      return null;

    return (
        <section className="py-12">
            <div className="limit">
              <h2 className="max-w-xl font-extrabold leading-none text-4xl md:text-5xl">{title}</h2>
              {roles.map(role => 
                <PersonList
                  persons={role.personList}
                  role={role.title}
                />
              )}
            </div>
        </section>
    )
  }
}

Structure.propTypes = {
    structure: {}
}

export default Structure
