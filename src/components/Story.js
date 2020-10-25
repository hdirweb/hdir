import React from 'react'
import PropTypes from 'prop-types'

import BigCards from '../components/BigCards'
import SmallCards from '../components/SmallCards'

const Story = class extends React.Component {
  render() {
    const { cards, title } = this.props.story;

    return (
      <section className="py-12">
        <div className="limit">
          <h2 className="title">{title}</h2>
        </div>
        <BigCards cards={cards} className="hidden md:block mt-12"/>
        <SmallCards cards={cards} className="md:hidden mt-12"/>
      </section>
    )
  }
}

Story.propTypes = {
  story: {
    cards: PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        text: PropTypes.string,
      })
    ),
    title: PropTypes.string
  }
}

export default Story
