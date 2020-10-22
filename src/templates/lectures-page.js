import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Lectures from '../components/Lectures'
import Hero from '../components/Hero'
import Layout from '../components/Layout'

export const LecturesPageTemplate = ({ hero }) => {
  return (
    <React.Fragment>
      <Hero hero={ hero } />
      <Lectures />
    </React.Fragment>
  )
}

LecturesPageTemplate.propTypes = {
  hero: PropTypes.object
}

const LecturesPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <LecturesPageTemplate
        hero={frontmatter.hero}
      />
    </Layout>
  )
}

LecturesPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default LecturesPage

export const lecturesPageQuery = graphql`
  query LecturesPage($id: String!) {
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
