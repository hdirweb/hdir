import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'

import ShortFeed from './ShortFeed'

const RecentActivities = class extends React.Component {
  render() {
    const { activity, lang, recent } = this.props;

    return (
      <StaticQuery
      query={graphql`
        query RecentActivitiesQuery {
          allMarkdownRemark(
            limit: 3,
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
                        fluid(maxWidth: 1000, quality: 100) {
                          ...GatsbyImageSharpFluid
                        }
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
                        fluid(maxWidth: 1000, quality: 100) {
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
      render={(data, count) => <ShortFeed activity={activity} data={data} count={count} lang={lang} recent={recent} />}
      />
    )
  }
}

RecentActivities.propTypes = {
  activity: PropTypes.string,
  lang: PropTypes.string
}

export default RecentActivities