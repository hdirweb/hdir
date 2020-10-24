import React from 'react'
import { Link } from 'gatsby'

const Membership = class extends React.Component {
  render() {
    const { height, image, link, title, subtitle } = this.props.membership;

    return (
        <section className="relative" style={{height: `${height}rem`}}>
            <div 
                className="bg-cover h-full"
                style={{
                backgroundImage: `url(${
                    !!image.childImageSharp ? image.childImageSharp.fluid.src : image
                })`,
                filter: "grayscale(100%)",
                }}
            >
            </div>
            <div className="absolute top-0 w-full py-12">
                <div className="limit">
                    <h2 className="max-w-md mb-6 font-extrabold text-4xl md:text-5xl leading-none">{title}</h2>
                    <div className="text-lg max-w-lg">{subtitle}</div>
                    <Link className="btn mt-6" to={link.page}>{link.title}</Link>
                </div>
            </div>
        </section>
    )
  }
}

Membership.propTypes = {
    membership: {}
}

export default Membership
