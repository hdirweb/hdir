import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import Feed from './Feed'

export default () => (
  <StaticQuery
    query={graphql`
      query WorkshopsQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "activity-post" } activity: { eq: "workshops" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "DD. MM. YYYY.")
                description
                featuredpost
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
    `}
    render={(data, count) => <Feed data={data} count={count} />}
  />
)