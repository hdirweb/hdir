import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Docs from '../components/Docs'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import LeftText from '../components/LeftText'
import Membership from '../components/Membership'
import RightText from '../components/RightText'
import Story from '../components/Story'
import Structure from '../components/Structure'
import TextWithImage from '../components/TextWithImage'

export const AboutPageTemplate = ({ docs, hero, leftText, membership, rightText, story, structure, textWithImage }) => {
  return (
    <React.Fragment>
      <Hero hero={hero} />
      <Story story={story} />
      <TextWithImage textWithImage={textWithImage} />
      <RightText rightText={rightText} />
      <LeftText leftText={leftText} />
      <Membership membership={membership} />
      <Structure structure={structure} />
      <Docs docs={docs} />
    </React.Fragment>
  )
}

AboutPageTemplate.propTypes = {
  docs: PropTypes.object,
  hero: PropTypes.object,
  leftText: PropTypes.object,
  membership: PropTypes.object,
  rightText: PropTypes.object,
  story: PropTypes.object,
  structure: PropTypes.object,
  textWithImage: PropTypes.object
}

const AboutPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout lang={frontmatter.lang}>
      <AboutPageTemplate
        docs={frontmatter.docs}
        hero={frontmatter.hero}
        leftText={frontmatter.leftText}
        membership={frontmatter.membership}
        rightText={frontmatter.rightText}
        story={frontmatter.story}
        structure={frontmatter.structure}
        textWithImage={frontmatter.textWithImage}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        docs {
          files {
            name
            path {
              publicURL
            }
          }
          show
          title
        }
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
        leftText {
          body
          isBig
          link {
            title
            page
          }
          title
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
            page
            title
          }
          subtitle
          title
        }
        rightText {
          body
          title
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
        structure {
          roles {
            personList {
              name
              title
            }
            title
          }
          show
          title
        }
        textWithImage {
          body
          image {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
