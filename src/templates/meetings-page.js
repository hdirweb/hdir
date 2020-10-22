import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Meetings from '../components/Meetings'
import Hero from '../components/Hero'
import Layout from '../components/Layout'

export const MeetingsPageTemplate = ({ hero }) => {
  return (
    <React.Fragment>
      <Hero hero={ hero } />
      <Meetings />
    </React.Fragment>
  )
}

MeetingsPageTemplate.propTypes = {
  hero: PropTypes.object
}

const MeetingsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <MeetingsPageTemplate
        hero={frontmatter.hero}
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
