import React from 'react'
import { Link } from 'gatsby'

const Hero = class extends React.Component {
  render() {
    const { height, image, link, title, top, subtitle } = this.props.hero;

    return (
        <section className="relative" style={{height: height ? `${height}rem` : '50rem' }}>
            <div
                className="bg-cover h-full"
                style={{
                    backgroundPosition: "64% 50%",
                    backgroundImage: `url(${
                    !!image.childImageSharp ? image.childImageSharp.fluid.src : image
                    })`,
                    filter: "grayscale(100%) brightness(70%)",
                }}
            >
            </div>
            <div className="absolute w-full bottom-0 text-white">
                <div className="limit py-24">
                    {top !== '' &&
                        <p className="max-w-4xl text-lg uppercase mb-2">{top}</p>
                    }
                    <h1 className="max-w-4xl leading-none font-extrabold text-4xl md:text-7xl mb-4">{title}</h1>
                    <p className="max-w-4xl text-lg md:text-2xl">{subtitle}</p>
                    {link.page !== '' && link.title !== '' && 
                        <p className="mt-6"><Link className="btn" to={link.page}>{link.title}</Link></p>
                    }
                </div>
            </div>
        </section>
    )
  }
}

Hero.propTypes = {
    hero: {}
}

export default Hero
