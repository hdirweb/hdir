import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Hero from '../components/Hero'
import Layout from '../components/Layout'
import LeftText from '../components/LeftText'
import Payment from '../components/Payment'
import Pricing from '../components/Pricing'

export const MembershipPageTemplate = ({ hero, leftText, payment, pricing }) => {
  return (
    <React.Fragment>
        <Hero hero={ hero } />
        <Pricing pricing={ pricing } />
        <LeftText leftText={ leftText } />
        <Payment payment={ payment } />
    </React.Fragment>
  )
}

MembershipPageTemplate.propTypes = {
  hero: PropTypes.object,
  leftText: PropTypes.object,
  payment: PropTypes.object,
  pricing: PropTypes.object,
}

const MembershipPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <MembershipPageTemplate
        hero={post.frontmatter.hero}
        leftText={post.frontmatter.leftText}
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
