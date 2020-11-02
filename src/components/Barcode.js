import PropTypes from 'prop-types'
import React from 'react'
import PDF417 from 'pdf417-generator'

const Barcode = class extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
          rate: 0
        }
    }

    componentDidUpdate() {
        const canvas = this.refs.canvas;
        PDF417.draw(this.getEncodedText(), canvas, devicePixelRatio = 8)
    }

    convertAmount(amount) {
        return this.padLeft(amount.toString().replace('.', ''), 15, '0');
    }

    getEncodedText() {
        const CODE = '';
        const CURRENCY = 'HRK';
        const DELIMITER = String.fromCharCode(0x0A);
        const HEADER = 'HRVHUB30';
        const MODEL = '';
        const REFERENCE_NUMBER = '';
        
        const { amount, description, iban } = this.props;

        const sender = {
            address: '',
            fullName: '',
            postcode: '',
        }

        const recipient = {
            address: this.props.recipient[1],
            fullName: this.props.recipient[0],
            iban,
            postcode: this.props.recipient[2],
        }

        return [
            HEADER,
            CURRENCY,
            this.convertAmount(amount),
            sender.fullName,
            sender.address,
            sender.postcode,
            recipient.fullName,
            recipient.address,
            recipient.postcode,
            recipient.iban,
            MODEL,
            REFERENCE_NUMBER,
            CODE,
            description
        ].join(DELIMITER);
    }

    padLeft(str, len, pad) {
		while (str.length < len) {
			str = pad + str;
		}
		return str;
	}

    render() {
        return (
            <canvas
                className="w-full max-w-lg my-16"
                ref="canvas"
                style={{
                    transform: "scaleY(2)",
                    transformOrigin: "left"
                }}
            />
        )
    }
}

Barcode.propTypes = {
    amount: PropTypes.number,
    description: PropTypes.string,
    iban: PropTypes.string,
    recipient: PropTypes.array
}

export default Barcode
