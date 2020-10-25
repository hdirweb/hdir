import PropTypes from 'prop-types'
import React from 'react'

import { fetchRate, format } from '../components/Exchange'

const Pricing = class extends React.Component {
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
    const { plans, title } = this.props.pricing;
    const { rate } = this.state;

    return (
      <section className="py-12">
        <div className="limit">
            <p className="title">{title}</p>
            <div className="sm:flex py-16">
                {plans.map((plan, index) => (
                    <div key={plan.title} className={`bg-white h-80 p-8 rounded-lg shadow w-80 flex flex-col ${index === 0 ? "" : "sm:ml-12 mt-8 sm:mt-0"}`}>
                        <p className="font-extrabold text-xl flex-grow">{plan.title}</p>
                        <p className={`text-center mt-16 ${plan.isValueBig ? "text-5xl font-medium leading-none" : "text-3xl font-semibold"}`}>{plan.value}</p>
                        <p className="opacity-50 text-sm text-center">{format(plan.value, rate)}{plan.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>
    )
  }
}

Pricing.propTypes = {
  pricing: {
    plans: PropTypes.arrayOf(
      PropTypes.shape({
        description: PropTypes.string,
        isValueBig: PropTypes.bool,
        title: PropTypes.string,
        value: PropTypes.string
      })
    ),
    title: PropTypes.string
  }
}

export default Pricing
