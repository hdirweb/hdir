import React from 'react'
import { Link } from 'gatsby'
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';

const Hero = class extends React.Component {
  render() {
    const { height, image, link, title, top, subtitle } = this.props.hero;
    const isCmsApp = typeof NetlifyCmsApp !== "undefined";

    return (
        <section className="relative mb-6" style={{height: height ? `${height}rem` : '50rem' }}>
            <ParallaxProvider>
                <ParallaxBanner
                    className="bg-gray-400"
                    layers={[
                        {
                            image: image?.childImageSharp?.gatsbyImageData?.images.fallback.src || image,
                            amount: 0.16,
                        },
                    ]}
                    style={{
                        height: height ? `${height}rem` : '50rem',
                        filter: "grayscale(100%) brightness(60%)",
                    }}
                >
                </ParallaxBanner>
            </ParallaxProvider>
            <div className="absolute w-full bottom-0 text-white">
                <div className="limit py-24">
                    {top !== '' &&
                        <p
                            className="max-w-4xl text-lg uppercase mb-2"
                            data-sal={`${isCmsApp ? "" : "slide-right"}`}
                            data-sal-easing="ease"
                            style={{"--sal-duration": "0.8s", "--sal-delay": "1.7s"}}
                        >
                            {top}
                        </p>
                    }
                    <h1 
                        className="max-w-4xl leading-none font-extrabold text-4xl md:text-6xl mb-4"
                        data-sal={`${isCmsApp ? "" : "slide-right"}`}
                        data-sal-easing="ease"
                        style={{"--sal-duration": "2s", "--sal-delay": "0.2s"}}
                    >
                        {title}
                    </h1>
                    <p 
                        className="max-w-4xl text-lg md:text-2xl"
                        data-sal={`${isCmsApp ? "" : "slide-right"}`}
                        data-sal-easing="ease"
                        style={{"--sal-duration": "1.5s", "--sal-delay": "0.8s"}}
                    >
                        {subtitle}
                    </p>
                    {link.page !== '' && link.title !== '' && 
                        <p 
                            className="mt-6"
                            data-sal={`${isCmsApp ? "" : "slide-right"}`}
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
