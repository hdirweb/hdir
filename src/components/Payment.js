import PropTypes from 'prop-types'
import React from 'react'

import { fetchRate, format } from '../components/Exchange'

const Payment = class extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
          rate: 0
        }
    }

    componentDidMount() {
        const ref = this
        fetchRate().then(rate => ref.setState({ rate }))
    }

    render() {
        const { details, title } = this.props.payment;
        const { rate } = this.state;

        return (
            <section className="py-24">
                <div className="limit">
                    <p className="font-extrabold text-2xl md:text-4xl">{title}</p>
                    <div className="max-w-lg mt-6">
                        {details.map((detail) => 
                            {
                                const exchangedValue = format(detail.value, rate);
                                let value = (exchangedValue !== "") ? exchangedValue : detail.value;
                                value = value.replace('$year', new Date().getFullYear())
                                return (
                                    <div key={detail.title} className="sm:flex sm:items-center mb-6">
                                        <div className="sm:w-1/3">
                                            <label className="block font-bold sm:text-right mb-1 sm:mb-0 pr-4">
                                                {detail.title}
                                            </label>
                                        </div>
                                        <div className="sm:w-2/3">
                                            <input className={`overflow-hidden truncate bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 leading-tight focus:outline-none disabled ${detail.isNumber ? "font-number font-light" : ""}`} type="text" value={value} readOnly />
                                        </div>
                                    </div>
                                )
                            }
                        )}
                    </div>
                </div>
            </section>
        )
    }
}

Payment.propTypes = {
    payment: {
        details: PropTypes.arrayOf(
          PropTypes.shape({
            isNumber: PropTypes.bool,
            title: PropTypes.string,
            value: PropTypes.string
          })
        ),
        title: PropTypes.string
    }
}

export default Payment
