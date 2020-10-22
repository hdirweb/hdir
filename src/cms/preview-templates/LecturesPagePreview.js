import React from 'react'
import PropTypes from 'prop-types'
import { LecturesPageTemplate } from '../../templates/lectures-page'

const LecturesPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <LecturesPageTemplate
        hero={data.hero || {}}
      />
    )
  }
}

LecturesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default LecturesPagePreview
