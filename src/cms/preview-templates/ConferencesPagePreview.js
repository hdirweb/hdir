import React from 'react'
import PropTypes from 'prop-types'
import { ConferencesPageTemplate } from '../../templates/conferences-page'

const ConferencesPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <ConferencesPageTemplate
        hero={data.hero || {}}
      />
    )
  }
}

ConferencesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default ConferencesPagePreview
