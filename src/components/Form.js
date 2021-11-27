import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import Pdf from '../components/Pdf'

function encode(data) {
    return Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
}

const Form = class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isPdfTesting: false,
            isSubmitted: false,
        }
      }

    componentDidMount() {
        this.setState({ isPdfTesting: window.location.search.includes("test") });
    }


    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({
            'form-name': form.getAttribute('name'),
            ...this.state,
          }),
        })
          .then(() => this.setState({ isSubmitted: true }))
          .then(() => window.scrollTo(0, 0))
          .catch((error) => alert(error))
    }
    
    render() {
        const { button, isPdf, name, pdf, sections, success } = this.props.form;
        const fieldClass = "leading-normal text-lg bg-white appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 leading-tight focus:outline-none focus:border-gray-600";

        return (
            <section className="py-12">
                <div className="limit">
                    {!this.state.isSubmitted && 
                    <form
                        className="max-w-3xl"
                        name={name}
                        method="post"
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                        onSubmit={this.handleSubmit}
                    >
                        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                        <input type="hidden" name="form-name" value={name} />
                        <input type="hidden" name="date" value={new Date().toISOString().split("T")[0]} />
                        <div hidden>
                            <label>
                                <input name="bot-field" onChange={this.handleChange} />
                            </label>
                        </div>
                        {sections.map((section) => (
                            <React.Fragment>
                                <p className="title">{section.title}</p>
                                <div className="flex flex-wrap my-8 sm:-mx-3">
                                    {section.fields && section.fields.map((field) => (
                                        <div
                                            className={`mb-6 sm:px-3 w-full ${field.isFullWidth ? "" : "sm:w-1/2"}`}
                                            htmlFor={field.name}
                                        >
                                            <div>
                                                <label className={`block sm:flex ${field.type === 'checkbox' ? "flex cursor-pointer" : "mb-1 pr-4"}`} htmlFor={field.name}>
                                                    {field.type === 'checkbox' && <input className="mr-2 self-start w-32 relative" type="checkbox" id={field.name} required={true} style={{ top: "5px" }} />}
                                                    <span className={`${field.type === 'checkbox' ? "text-md pl-3" : "font-bold sm:whitespace-no-wrap sm:truncate"}`}>{field.title}</span>
                                                    {field.isRequired && <span> ❋</span>}
                                                </label>
                                            </div>
                                            <div>
                                                {field.type === 'textarea' &&
                                                    <textarea
                                                        className={fieldClass}
                                                        type="text"
                                                        name={field.name}
                                                        onChange={this.handleChange}
                                                        id={field.name}
                                                        required={field.isRequired}
                                                        style={{ minHeight: '8em' }}
                                                    />
                                                }
                                                {field.type !== 'textarea' && field.type !== 'checkbox' &&
                                                    <input
                                                        className={fieldClass}
                                                        type={field.type}
                                                        name={field.name}
                                                        onChange={this.handleChange}
                                                        id={field.name}
                                                        required={field.isRequired}
                                                    />
                                                }
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </React.Fragment>
                        ))}
                        <button className="btn" type="submit">
                            {button}
                        </button>
                    </form>
                    }
                    {(this.state.isSubmitted || this.state.isPdfTesting) &&
                        <React.Fragment>
                            <h3 className="text-lg font-bold">{ success.title }</h3>
                            <p className="text-lg mb-6">{ success.subtitle }</p>
                            {isPdf && pdf && <Pdf button={ success.button } formState={ this.state } lang={ this.props.lang } pdf={ pdf } sections={ sections } />}
                            {!isPdf && <Link to="/">{ success.button }</Link>}
                        </React.Fragment>
                    }
                </div>
            </section>
        )
    }
}

Form.propTypes = {
    form: {
        button: PropTypes.string,
        isPdf: PropTypes.string,
        name: PropTypes.string,
        pdf: PropTypes.object,
        sections: PropTypes.arrayOf(
            PropTypes.shape({
                fields: PropTypes.arrayOf(
                    PropTypes.shape({
                        isFullWidth: PropTypes.bool,
                        isRequired: PropTypes.bool,
                        name: PropTypes.string,
                        title: PropTypes.string,
                        type: PropTypes.string
                    })
                ),
                title: PropTypes.string
            })
        ),
        success: PropTypes.object
    },
    lang: PropTypes.string
}

export default Form
