import React from 'react'
import { Link } from 'gatsby'

const Hero = class extends React.Component {
  render() {
    const { height, image, link, title, top, subtitle } = this.props.hero;

    return (
        <section className="relative mb-6" style={{height: height ? `${height}rem` : '50rem' }}>
            <div
                className="bg-cover bg-gray-600 h-full"
                style={{
                    backgroundPosition: "64% 50%",
                    backgroundImage: `url(${
                    !!image.childImageSharp ? image.childImageSharp.fluid.src : image
                    })`,
                    filter: "grayscale(100%) brightness(60%)",
                }}
            >
            </div>
            <div className="absolute w-full bottom-0 text-white">
                <div className="limit py-24">
                    {top !== '' &&
                        <p
                            className="max-w-4xl text-lg uppercase mb-2"
                            data-sal="slide-right"
                            data-sal-easing="ease"
                            style={{"--sal-duration": "0.8s", "--sal-delay": "1.7s"}}
                        >
                            {top}
                        </p>
                    }
                    <h1 
                        className="max-w-4xl leading-none font-extrabold text-4xl md:text-6xl mb-4"
                        data-sal="slide-right"
                        data-sal-easing="ease"
                        style={{"--sal-duration": "2s", "--sal-delay": "0.2s"}}
                    >
                        {title}
                    </h1>
                    <p 
                        className="max-w-4xl text-lg md:text-2xl"
                        data-sal="slide-right"
                        data-sal-easing="ease"
                        style={{"--sal-duration": "1.5s", "--sal-delay": "0.8s"}}
                    >
                        {subtitle}
                    </p>
                    {link.page !== '' && link.title !== '' && 
                        <p 
                            className="mt-6"
                            data-sal="slide-right"
                            data-sal-easing="ease"
                            style={{"--sal-duration": "1.3s", "--sal-delay": "1.2s"}}
                        >
                            <Link className="btn" to={link.page}>{link.title}</Link>
                        </p>
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
