import React from 'react'
import PropTypes from 'prop-types'

const SmallCards = ({ cards, className }) => (
  <div className={className || ''} >
    {cards.map((card, index, array) => (
        <div key={card.text} className={`w-full px-4 ${array.length - 1 === index ? "" : "mb-12"}`}>
            <Image image={card.image || {}} />
            <Text text={card.text} />
        </div>
      ))}
  </div>
)

const Image = ({ image }) => (
    <div 
        className={`bg-cover h-48 shadow rounded-t-lg`}
        style={{
            filter: "grayscale(100%)",
            backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
            })`,
        }}
    ></div>
)

const Text = ({ text }) => (
    <div className="bg-white shadow rounded-b-lg">
        <p className="p-6 text-xl">{text}</p>
    </div>
)

SmallCards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
  className: PropTypes.string
}

export default SmallCards
