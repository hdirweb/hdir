import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Activities from '../components/Activities'
import Hero from '../components/Hero'
import Layout from '../components/Layout'

export const ConferencesPageTemplate = ({ hero, lang }) => {
  return (
    <React.Fragment>
      <Hero hero={ hero } />
      <Activities activity="conferences" lang={lang} />
    </React.Fragment>
  )
}

ConferencesPageTemplate.propTypes = {
  hero: PropTypes.object
}

const ConferencesPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout lang={frontmatter.lang}>
      <ConferencesPageTemplate
        hero={frontmatter.hero}
        lang={frontmatter.lang}
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
        lang
        hero {
          height
          image {
            childImageSharp {
              gatsbyImageData(width: 4096, quality: 100)
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
