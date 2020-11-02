import PropTypes from 'prop-types'
import React from 'react'

import Barcode from '../components/Barcode'
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

    handleFocus(event) {
        event.target.select();
    }

    render() {
        const { details, title } = this.props.payment;
        const { rate } = this.state;

        let amount = details.find(detail => detail.value.includes("€")).value;
        amount = format(amount, rate).split(' ')[0].replace(',' , '')

        const iban = details.find(detail => detail.title.includes("IBAN")).value;

        const description = details.find(detail => detail.title.includes("Opis") || detail.title.includes("Description")).value.replace('$year', new Date().getFullYear()).replace("č", "c");

        const recipient = details.find(detail => detail.title.includes("Recipient") || detail.title.includes("Primatelj")).value.split(',');

        return (
            <section className="py-12 mt-6">
                <div className="limit">
                    <p className="title">{title}</p>
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
                                            <input
                                                className={`overflow-hidden truncate bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 leading-tight focus:outline-none disabled ${detail.isNumber ? "font-number font-light" : ""}`}
                                                type="text"
                                                value={value}
                                                readOnly
                                                onFocus={this.handleFocus}
                                            />
                                        </div>
                                    </div>
                                )
                            }
                        )}
                    </div>
                    <Barcode amount={amount} description={description} iban={iban} recipient={recipient} />
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
