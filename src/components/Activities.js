import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'

import Feed from './Feed'

const Activities = class extends React.Component {
  render() {
    const { activity, lang } = this.props;

    return (
      <StaticQuery
      query={graphql`
        query ActivitiesQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___hr___date] }
            filter: { frontmatter: { hr: { templateKey: { eq: "activity-post" } } } }
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
                    activity
                    title
                    templateKey
                    date
                    description
                    featuredimage {
                      childImageSharp {
                        gatsbyImageData(width: 180, quality: 100)
                      }
                    }
                  }
                  en {
                    activity
                    title
                    templateKey
                    date
                    description
                    featuredimage {
                      childImageSharp {
                        gatsbyImageData(width: 180, quality: 100)
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <Feed activity={activity} data={data} count={count} lang={lang} />}
      />
    )
  }
}

Activities.propTypes = {
  activity: PropTypes.string,
  lang: PropTypes.string
}

export default Activities