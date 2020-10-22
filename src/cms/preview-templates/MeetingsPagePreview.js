import React from 'react'
import PropTypes from 'prop-types'
import { MeetingsPageTemplate } from '../../templates/meetings-page'

const MeetingsPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <MeetingsPageTemplate
        hero={data.hero || {}}
      />
    )
  }
}

MeetingsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default MeetingsPagePreview
