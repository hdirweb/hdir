import React from 'react'

const RightText = class extends React.Component {
  render() {
    const { body, title } = this.props.rightText;

    return (
        <section className="py-12">
            <div className="limit md:flex">
                <h2 className="font-extrabold text-4xl md:text-5xl md:w-1/2 md:pr-6 leading-none" style={{ position: "relative", top: "-0.1em" }}>{title}</h2>
                <p className="mt-6 md:mt-0 text-xl md:w-1/2">{body}</p>
            </div>
        </section>
    )
  }
}

RightText.propTypes = {
    rightText: {}
}

export default RightText
