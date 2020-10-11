import React from 'react'

const TextWithImage = class extends React.Component {
  render() {
    const { body, image } = this.props.textWithImage;

    return (
        <section className="py-12">
            <div className="limit md:flex">
                <p className="text-xl md:w-1/2">{body}</p>
                <img className="h-48 mt-12 md:m-auto justify-self-center" alt="" src={`${!!image.childImageSharp ? image.childImageSharp.fluid.src : image}`}/>
            </div>
        </section>
    )
  }
}

TextWithImage.propTypes = {
    textWithImage: {}
}

export default TextWithImage
