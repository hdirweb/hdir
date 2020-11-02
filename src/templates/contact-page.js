import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Form from '../components/Form'
import Hero from '../components/Hero'
import Layout from '../components/Layout'

export class ContactPageTemplate extends React.Component {
    render() {
        const { form, hero, lang } = this.props;

        return (
            <React.Fragment>
                <Hero hero={ hero } />
                <section className="py-12">
                  <div className="limit text-xl">
                    <p className="title pb-8">{ lang === "en" ? "Address" : "Adresa" }</p>
                    <p>Ruđer Bošković Institute</p>
                    <p>Bijenička 54</p>
                    <p>10000 Zagreb</p>
                    <p>Croatia</p>
                    <p>Tel: <a href="tel:+385-1-4571-292" class="font-number font-light">+385-1-4571-292</a></p>
                    <p>Fax: <a href="tel:+385-1-4561-1010" class="font-number font-light">+385-1-4561-1010</a></p>
                  </div>
                </section>
                <Form form={ form } />
            </React.Fragment>
        )
    }
}

ContactPageTemplate.propTypes = {
  form: PropTypes.object,
  hero: PropTypes.object,
  lang: PropTypes.string
}

const ContactPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout lang={post.frontmatter.lang}>
      <ContactPageTemplate
        form={post.frontmatter.form} 
        hero={post.frontmatter.hero}
        lang={post.frontmatter.lang}
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
