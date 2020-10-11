import React from 'react'
import PropTypes from 'prop-types'
import { MembershipPageTemplate } from '../../templates/membership-page'

const MembershipPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <MembershipPageTemplate
        hero={data.hero || {}}
        leftText={data.leftText || {}}
        payment={data.payment || {}}
        pricing={data.pricing || {}}
      />
    )
  }
}

MembershipPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default MembershipPagePreview
