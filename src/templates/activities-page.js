import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Activities from '../components/Activities'
import Hero from '../components/Hero'
import Layout from '../components/Layout'

export const ActivitiesPageTemplate = ({ hero }) => {
  return (
    <React.Fragment>
      <Hero hero={ hero } />
      <Activities />
    </React.Fragment>
  )
}

ActivitiesPageTemplate.propTypes = {
  hero: PropTypes.object
}

const ActivitiesPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ActivitiesPageTemplate
        hero={frontmatter.hero}
      />
    </Layout>
  )
}

ActivitiesPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ActivitiesPage

export const activitiesPageQuery = graphql`
  query ActivitiesPage($id: String!) {
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
