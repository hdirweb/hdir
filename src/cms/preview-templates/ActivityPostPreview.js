import React from 'react'
import PropTypes from 'prop-types'
import { ActivityPostTemplate } from '../../templates/activity-post'

const ActivityPostPreview = ({ entry, widgetFor }) => {
  const lang = entry.getIn(['data', 'lang']);
  return (
    <React.Fragment>
      {lang === 'hr' && <p className="text-2xl font-bold text-red-500 p-8">Ova objava treba biti napisana na hrvatskom jeziku.</p>}
      {lang === 'en' && <p className="text-2xl font-bold text-red-500 p-8">This post has to be in English language.</p>}
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
