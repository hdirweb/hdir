import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Membership from '../components/Membership'
import Poster from '../components/Poster'
import Story from '../components/Story'

export const IndexPageTemplate = ({
  hero,
  membership,
  poster,
  story
}) => {
  return (
  <React.Fragment>
    <Hero hero={ hero } />
    <Story story={ story } />
    <Poster poster={ poster } />
    <Membership membership={ membership } />
  </React.Fragment>
)}

IndexPageTemplate.propTypes = {
  story: PropTypes.object,
  hero: PropTypes.object,
  membership: PropTypes.object,
  poster: PropTypes.object,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout lang={frontmatter.lang}>
      <IndexPageTemplate
        hero={frontmatter.hero}
        membership={frontmatter.membership}
        poster={frontmatter.poster}
        story={frontmatter.story}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const indexPageQuery = graphql`
  query IndexPage($id: String!) {
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
        membership {
          height
          image {
            childImageSharp {
              fluid(maxWidth: 4096, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          link {
            title
            page
          }
          subtitle
          title
        }
        poster {
          colors {
            code
          }
          image {
            childImageSharp {
              fluid(maxWidth: 1600, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          link {
            title
            page
          }
        }
        story {
          cards {
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          title
        }
      }
    }
  }
`
