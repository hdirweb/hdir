import CMS from 'netlify-cms-app'
import cloudinary from 'netlify-cms-media-library-cloudinary'
import uploadcare from 'netlify-cms-media-library-uploadcare'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import ActivitiesPagePreview from './preview-templates/ActivitiesPagePreview'
import ActivityPostPreview from './preview-templates/ActivityPostPreview'
import ConferencesPagePreview from './preview-templates/ConferencesPagePreview'
import ContactPagePreview from './preview-templates/ContactPagePreview'
import FooterPreview from './preview-templates/FooterPreview'
import MeetingsPagePreview from './preview-templates/MeetingsPagePreview'
import MembershipPagePreview from './preview-templates/MembershipPagePreview'
import MembershipApplicationPagePreview from './preview-templates/MembershipApplicationPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import LecturesPagePreview from './preview-templates/LecturesPagePreview'
import WorkshopsPagePreview from './preview-templates/WorkshopsPagePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('activitiesPage', ActivitiesPagePreview)
CMS.registerPreviewTemplate('activitiesHR', ActivityPostPreview)
CMS.registerPreviewTemplate('activitiesEN', ActivityPostPreview)
CMS.registerPreviewTemplate('conferences', ConferencesPagePreview)
CMS.registerPreviewTemplate('contact', ContactPagePreview)
CMS.registerPreviewTemplate('footer', FooterPreview)
CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('meetings', MeetingsPagePreview)
CMS.registerPreviewTemplate('membership', MembershipPagePreview)
CMS.registerPreviewTemplate('membershipApplication', MembershipApplicationPagePreview)
CMS.registerPreviewTemplate('lectures', LecturesPagePreview)
CMS.registerPreviewTemplate('workshops', WorkshopsPagePreview)