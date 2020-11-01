import React from 'react'
import PropTypes from 'prop-types'

const BigCards = ({ cards, className }) => (
  <div className={className || ''} >
    {cards.map((card, index, array) => (
        <div key={card.text} className={`${array.length - 1 === index ? "" : "mb-24"}`}>
          {index % 2 === 0 ? <Left card={card} /> : <Right card={card} />}
        </div>
      ))}
  </div>
)

const Image = ({ image }) => (
    <div 
        className={`bg-cover h-80 shadow`}
        style={{
            filter: "grayscale(100%)",
            backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
            })`,
            width: "55vw",
        }}
        
    ></div>
)

const Left = ({ card }) => (
  <div
    className="flex"
    data-sal="slide-right"
    data-sal-easing="ease"
    style={{"--sal-duration": "1.5s"}}
  >
      <Image image={card.image || {}} />
      <Text position="left" text={card.text} />
  </div>
)

const Right = ({ card }) => (
  <div
    className="flex justify-end"
    data-sal="slide-left"
    data-sal-easing="ease"
    style={{"--sal-duration": "1.5s"}}
  >
      <Text position="right" text={card.text} />
      <Image image={card.image || {}} />
  </div>
)

const Text = ({ position, text }) => (
    <div className={`bg-white w-80 h-80 shadow ${position === "left" ? "rounded-r-lg" : "rounded-l-lg"}`}>
        <p className="p-6 text-xl">{text}</p>
    </div>
)

BigCards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
  className: PropTypes.string
}

export default BigCards
