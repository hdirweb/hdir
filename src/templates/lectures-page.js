import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Activities from '../components/Activities'
import Hero from '../components/Hero'
import Layout from '../components/Layout'

export const LecturesPageTemplate = ({ hero, lang }) => {
  return (
    <React.Fragment>
      <Hero hero={ hero } />
      <Activities activity="lectures" lang={lang} />
    </React.Fragment>
  )
}

LecturesPageTemplate.propTypes = {
  hero: PropTypes.object
}

const LecturesPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout lang={frontmatter.lang}>
      <LecturesPageTemplate
        hero={frontmatter.hero}
        lang={frontmatter.lang}
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
