import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Conferences from '../components/Conferences'
import Hero from '../components/Hero'
import Layout from '../components/Layout'

export const ConferencesPageTemplate = ({ hero }) => {
  return (
    <React.Fragment>
      <Hero hero={ hero } />
      <Conferences />
    </React.Fragment>
  )
}

ConferencesPageTemplate.propTypes = {
  hero: PropTypes.object
}

const ConferencesPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ConferencesPageTemplate
        hero={frontmatter.hero}
      />
    </Layout>
  )
}

ConferencesPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ConferencesPage

export const conferencesPageQuery = graphql`
  query ConferencesPage($id: String!) {
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
