import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import MeetingsEN from '../components/MeetingsEN'
import MeetingsHR from '../components/MeetingsHR'
import Hero from '../components/Hero'
import Layout from '../components/Layout'

export const MeetingsPageTemplate = ({ hero, lang }) => {
  return (
    <React.Fragment>
      <Hero hero={ hero } />
      {lang === 'en' && <MeetingsEN />}
      {lang === 'hr' && <MeetingsHR />}
    </React.Fragment>
  )
}

MeetingsPageTemplate.propTypes = {
  hero: PropTypes.object
}

const MeetingsPage = ({ data, lang }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout lang={frontmatter.lang}>
      <MeetingsPageTemplate
        hero={frontmatter.hero}
        lang={frontmatter.lang}
      />
    </Layout>
  )
}

MeetingsPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default MeetingsPage

export const meetingsPageQuery = graphql`
  query MeetingsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        lang
        hero {
          height
          image {
            childImageSharp {
              fluid(maxWidth: 4096, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          subtitle
          title
          top
          link {
            title
            page
          }
        }
      }
    }
  }
`
