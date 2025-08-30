import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Activities from '../components/Activities'
import Hero from '../components/Hero'
import Layout from '../components/Layout'

export const WorkshopsPageTemplate = ({ hero, lang }) => {
  return (
    <React.Fragment>
      <Hero hero={ hero } />
      <Activities activity="workshops" lang={lang} />
    </React.Fragment>
  )
}

WorkshopsPageTemplate.propTypes = {
  hero: PropTypes.object
}

const WorkshopsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout lang={frontmatter.lang}>
      <WorkshopsPageTemplate
        hero={frontmatter.hero}
        lang={frontmatter.lang}
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
