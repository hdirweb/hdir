import React from 'react'
import { Link } from 'gatsby'

const Poster = class extends React.Component {
  render() {
    const { colors, image, link } = this.props.poster;

    return (
        <section className="hidden pb-12">
          <div className="relative">
            <div 
              className="limit"
              style={{
                padding: "5vw 0"
              }}
            >
              <Link to={link.page}>
                <img className="z-40 relative" alt="" src={`${!!image.childImageSharp ? image.childImageSharp.fluid.src : image}`}/>
              </Link>
              <div className="text-right mt-6 px-4 xl:px-0">
                <Link className="btn relative z-40" to={link.page}>{link.title}</Link>
              </div>
            </div>
            <svg className="absolute top-0" width="100%" viewBox="0 0 2481 714" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1315.78 713.446C232.229 726.131 -533.553 517.876 -781 412.163C-781 284.316 -41.916 -55.6177 1315.78 7.81025C2401.95 58.5526 2610.54 338.825 2579.06 472.618C2609.45 547.608 2399.34 700.76 1315.78 713.446Z" fill={colors[0].code}/>
              <path d="M1649.51 571.593C641.029 580.903 -71.6973 428.066 -302 350.484C-302 256.658 385.878 7.18255 1649.51 53.7319C2660.42 90.9714 2854.56 296.661 2825.27 394.851C2853.55 449.886 2658 562.283 1649.51 571.593Z" fill={colors[1].code}/>
              <path d="M1514.51 626.705C506.029 633.456 -206.697 522.62 -437 466.359C-437 398.317 250.878 217.4 1514.51 251.157C2525.42 278.162 2719.56 427.327 2690.27 498.533C2718.55 538.444 2523 619.954 1514.51 626.705Z" fill={colors[2].code}/>
            </svg>
          </div>
        </section>
    )
  }
}

Poster.propTypes = {
    poster: {}
}

export default Poster
