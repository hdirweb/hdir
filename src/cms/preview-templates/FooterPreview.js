import React from 'react'
import PropTypes from 'prop-types'
import { FooterTemplate } from '../../templates/footer'

const FooterPreview = ({ entry }) => {

  return (
    <React.Fragment>
      <FooterTemplate
        addressLines={entry.getIn(['data']).toJS().addressLines}
        bank={entry.getIn(['data', 'bank'])}
        email={entry.getIn(['data', 'email'])}
        fax={entry.getIn(['data', 'fax'])}
        iban={entry.getIn(['data', 'iban'])}
        mb={entry.getIn(['data', 'mb'])}
        nameEN={entry.getIn(['data', 'nameEN'])}
        nameHR={entry.getIn(['data', 'nameHR'])}
        oib={entry.getIn(['data', 'oib'])}
        tel={entry.getIn(['data', 'tel'])}
      />
    </React.Fragment>
  )
}

FooterPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default FooterPreview
