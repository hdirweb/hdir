import React from 'react'
import PropTypes from 'prop-types'
import { ActivityPostTemplate } from '../../templates/activity-post'

const ActivityPostPreview = ({ entry, widgetFor }) => {
  return (
    <ActivityPostTemplate
      content={widgetFor('body')}
      date={entry.getIn(['data', 'date']).toLocaleDateString('hr')}
      description={entry.getIn(['data', 'description'])}
      title={entry.getIn(['data', 'title'])}
    />
  )
}

ActivityPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ActivityPostPreview
