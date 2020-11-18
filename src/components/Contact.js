import React from 'react'

const Contact = class extends React.Component {
  render() {
    const { fax, lines, tel, title } = this.props.contact;

    return (
        <section className="py-12">
            <div className="limit text-xl">
                <p className="title pb-8">{title}</p>
                {lines.map((line) => (
                    <p>{line.text}</p>
                ))}
                <p>Tel: <a href={`tel:${tel}`} className="font-number font-light">{tel}</a></p>
                <p>Fax: <a href={`tel:${fax}`} className="font-number font-light">{fax}</a></p>
            </div>
        </section>
    )
  }
}

Contact.propTypes = {
    contact: {}
}

export default Contact
