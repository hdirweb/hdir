import React from 'react'
import PropTypes from 'prop-types'
import { WorkshopsPageTemplate } from '../../templates/workshops-page'

const WorkshopsPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <WorkshopsPageTemplate
        hero={data.hero || {}}
      />
    )
  }
}

WorkshopsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default WorkshopsPagePreview
