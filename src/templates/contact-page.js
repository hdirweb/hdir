import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Contact from '../components/Contact'
import Form from '../components/Form'
import Hero from '../components/Hero'
import Layout from '../components/Layout'

export class ContactPageTemplate extends React.Component {
    render() {
        const { contact, form, hero } = this.props;

        return (
            <React.Fragment>
                <Hero hero={ hero } />
                <Contact contact={ contact } />
                <Form form={ form } />
            </React.Fragment>
        )
    }
}

ContactPageTemplate.propTypes = {
  contact: PropTypes.object,
  form: PropTypes.object,
  hero: PropTypes.object
}

const ContactPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout lang={post.frontmatter.lang}>
      <ContactPageTemplate
        contact={post.frontmatter.contact} 
        form={post.frontmatter.form} 
        hero={post.frontmatter.hero}
      />
    </Layout>
  )
}

ContactPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ContactPage

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        lang
        contact {
          fax
          lines {
            text
          }
          tel
          title
        }
        form {
          button
          isPdf
          name
          sections {
              fields {
                  isFullWidth
                  isRequired
                  name
                  title
                  type
              }
              title
          }
          success {
            button
            subtitle
            title
          }
        }
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
