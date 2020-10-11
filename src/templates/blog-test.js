/*import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const AboutPageTemplate = ({ hero, title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <div className="bg-gray-200">
      <section className="relative" style={{ height: "20rem" }}>
        <div 
          className="bg-cover h-full"
          style={{
            backgroundPosition: "64% 50%",
            backgroundImage: `url(${
              !!hero.image.childImageSharp ? hero.image.childImageSharp.fluid.src : hero.image
            })`,
            filter: "grayscale(100%) brightness(70%)",
          }}
        >
        </div>
      </section>
      <section className="m-auto max-w-5xl p-6 md:p-8 shadow rounded-lg bg-white" style={{ position: "relative", top: "-10rem", marginBottom: "-5rem" }}>
        <h1 className="font-bold text-3xl text-gray-600 mb-6 max-w-xl m-auto">{title}</h1>
        <PageContent className="text-gray-600 content max-w-xl m-auto" content={content} />
      </section>
    </div>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        hero={post.frontmatter.hero}
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
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
      html
      frontmatter {
        hero {
          image {
            childImageSharp {
              fluid(maxWidth: 4096, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        title
      }
    }
  }
`
*/