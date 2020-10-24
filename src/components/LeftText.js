import { Link } from 'gatsby'
import React from 'react'

const LeftText = class extends React.Component {
  render() {
    const { body, isBig, link, title } = this.props.leftText;

    return (
        <section className="py-12">
            <div className="limit">
                <h2 className={`max-w-xl font-extrabold leading-none ${isBig ? "text-4xl md:text-5xl" : "text-2xl md:text-4xl"}`}>{title}</h2>
                <p className={`lg:w-1/2 mt-6 md:mt-12 ${isBig ? "text-2xl" : "text-lg"}`}>{body}</p>
                {link.page !== '' && link.title !== '' && 
                  <Link className="btn mt-6" to={link.page}>{link.title}</Link>
                }
            </div>
        </section>
    )
  }
}

LeftText.propTypes = {
    leftText: {}
}

export default LeftText
