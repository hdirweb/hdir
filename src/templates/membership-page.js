import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Membership from '../components/Membership'
import Payment from '../components/Payment'
import Pricing from '../components/Pricing'

export const MembershipPageTemplate = ({ hero, membership, payment, pricing }) => {
  return (
    <React.Fragment>
        <Hero hero={ hero } />
        <Pricing pricing={ pricing } />
        <Membership membership={ membership } /> 
        <Payment payment={ payment } />
    </React.Fragment>
  )
}

MembershipPageTemplate.propTypes = {
  hero: PropTypes.object,
  membership: PropTypes.object,
  payment: PropTypes.object,
  pricing: PropTypes.object,
}

const MembershipPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout lang={post.frontmatter.lang}>
      <MembershipPageTemplate
        hero={post.frontmatter.hero}
        membership={post.frontmatter.membership}
        payment={post.frontmatter.payment}
        pricing={post.frontmatter.pricing}
      />
    </Layout>
  )
}

MembershipPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default MembershipPage

export const membershipPageQuery = graphql`
  query MembershipPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
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
        payment {
          details {
              isNumber
              title
              value
          }
          title
        }
        pricing {
          plans {
              description
              isValueBig
              title
              value
          }
          title
        }
      }
    }
  }
`
