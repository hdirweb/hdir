import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import Feed from './Feed'

export default () => (
  <StaticQuery
    query={graphql`
      query MeetingsHRQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___hr___date] }
          filter: { frontmatter: { hr: { templateKey: { eq: "activity-post" } activity: { eq: "meetings" } } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                hr {
                  title
                  templateKey
                  date
                  description
                  featuredimage {
                    childImageSharp {
                      fluid(maxWidth: 180, quality: 100) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
                en {
                  title
                  templateKey
                  date
                  description
                  featuredimage {
                    childImageSharp {
                      fluid(maxWidth: 180, quality: 100) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <Feed data={data} count={count} lang="hr" />}
  />
)