import React from 'react'
import { Link } from 'gatsby'
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';

const Membership = class extends React.Component {
  render() {
    const { height, image, link, title, subtitle } = this.props.membership;

    return (
        <section className="relative mt-6" style={{height: `${height}rem`}}>
            <ParallaxProvider>
                <ParallaxBanner
                    layers={[
                        {
                            image: `${image?.childImageSharp?.fluid?.src || image}`,
                            amount: 0.16,
                        },
                    ]}
                    style={{
                        height: height ? `${height}rem` : '50rem',
                        filter: "grayscale(100%)",
                    }}
                >
                </ParallaxBanner>
            </ParallaxProvider>
            <div className="absolute top-0 w-full py-12">
                <div className="limit">
                    <h2 className="mb-6 title">{title}</h2>
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
