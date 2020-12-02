import React from 'react'
import PropTypes from 'prop-types'
import { ActivityPostTemplate } from '../../templates/activity-post'

const ActivityPostPreview = ({ entry, widgetFor }) => {
  const lang = entry.getIn(['data', 'lang']);
  return (
    <React.Fragment>
      <ActivityPostTemplate
        content={widgetFor('body')}
        date={entry.getIn(['data', 'date'])}
        description={entry.getIn(['data', 'description'])}
        lang={lang}
        title={entry.getIn(['data', 'title'])}
      />
    </React.Fragment>
  )
}

ActivityPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ActivityPostPreview
