import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Workshops from '../components/Workshops'
import Hero from '../components/Hero'
import Layout from '../components/Layout'

export const WorkshopsPageTemplate = ({ hero }) => {
  return (
    <React.Fragment>
      <Hero hero={ hero } />
      <Workshops />
    </React.Fragment>
  )
}

WorkshopsPageTemplate.propTypes = {
  hero: PropTypes.object
}

const WorkshopsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <WorkshopsPageTemplate
        hero={frontmatter.hero}
      />
    </Layout>
  )
}

WorkshopsPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default WorkshopsPage

export const workshopsPageQuery = graphql`
  query WorkshopsPage($id: String!) {
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
