import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { FooterComponent } from '../components/Footer'
import Layout from '../components/Layout'

export const FooterTemplate = (data) => {
  return (
    <React.Fragment>
      <FooterComponent
        data={data}
        lang="hr"
     />
    </React.Fragment>
  )
}

FooterTemplate.propTypes = {
  addressLines: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
    })
  ),
  bank: PropTypes.string,
  fax: PropTypes.string,
  iban: PropTypes.string,
  mb: PropTypes.string,
  nameEN: PropTypes.string,
  nameHR: PropTypes.string,
  oib: PropTypes.string,
  tel: PropTypes.string,
}

const Footer = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout lang="hr">
      <FooterTemplate
        addressLines={post.frontmatter.addressLines}
        bank={post.frontmatter.bank}
        fax={post.frontmatter.fax}
        iban={post.frontmatter.iban}
        mb={post.frontmatter.mb}
        nameEN={post.frontmatter.nameEN}
        nameHR={post.frontmatter.nameHR}
        oib={post.frontmatter.oib}
        tel={post.frontmatter.tel}
      />
    </Layout>
  )
}

Footer.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Footer

export const pageQuery = graphql`
  query FooterByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        addressLines {
            text
        }
        bank
        fax
        iban
        mb
        nameEN
        nameHR
        oib
        tel
      }
    }
  }
`
