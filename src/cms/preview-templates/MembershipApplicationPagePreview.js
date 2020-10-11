import React from 'react'
import PropTypes from 'prop-types'
import { MembershipApplicationPageTemplate } from '../../templates/membership-application-page'

const MembershipApplicationPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <MembershipApplicationPageTemplate
        form={data.form || {}}
        hero={data.hero || {}}
      />
    )
  }
}

MembershipApplicationPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default MembershipApplicationPagePreview
