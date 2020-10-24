import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Form from '../components/Form'
import Hero from '../components/Hero'
import Layout from '../components/Layout'

export class MembershipApplicationPageTemplate extends React.Component {
    render() {
        const { form, hero } = this.props;

        return (
            <React.Fragment>
                <Hero hero={ hero } />
                <Form form={ form } />
            </React.Fragment>
        )
    }
}

MembershipApplicationPageTemplate.propTypes = {
  form: PropTypes.object,
  hero: PropTypes.object
}

const MembershipApplicationPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout lang={post.frontmatter.lang}>
      <MembershipApplicationPageTemplate
        form={post.frontmatter.form} 
        hero={post.frontmatter.hero}
      />
    </Layout>
  )
}

MembershipApplicationPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default MembershipApplicationPage

export const membershipApplicationPageQuery = graphql`
  query MembershipApplicationPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        lang
        form {
          button
          isPdf
          name
          pdf {
            day
            defaultFullName
            header{
              leftColumn {
                text
              }
              rightColumn {
                text
              }
              title
            }
            mailingDetails {
              text
            }
            paymentDetails {
              text
            }
            signature
            title
          }
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
