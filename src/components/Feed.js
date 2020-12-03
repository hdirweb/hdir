import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

class Feed extends React.Component {
  getNonEmpty(frontmatter, field) {
    const lang = this.props.lang;
    return frontmatter[lang][field] || frontmatter["hr"][field]  || frontmatter["en"][field] ;
  }

  render() {
    const { activity, data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const lang = this.props.lang;
    return (
      <section className="py-24">
        <div className="limit">
        {posts &&
          posts.filter(post => activity !== "" ? post.node.frontmatter[lang].activity === activity : true).map(({ node: post }) => (
            <Link to={`/${lang}${post.fields.slug}`}>
            <div key={post.id} className="max-w-4xl">
              <article className="bg-white p-8 shadow rounded-lg mb-12">
                <header className="flex justify-between mb-4 flex-col sm:flex-row">
                  <span className="text-3xl font-bold leading-tight">
                    {this.getNonEmpty(post.frontmatter, "title")}
                  </span>
                  <span className="sm:pl-4 text-lg sm:self-start sm:pt-1 w-48 sm:text-right">
                    {new Date(post.frontmatter[lang].date).toLocaleDateString(lang)}
                  </span>
                </header>
                <p className="flex flex-col sm:flex-row">
                  {post.frontmatter[lang].featuredimage ? (
                    <div className="pr-6 pb-6">
                      <img 
                        className="z-40 relative rounded-lg"
                        alt=""
                        src={`${!!post.frontmatter[lang].featuredimage.childImageSharp ? post.frontmatter[lang].featuredimage.childImageSharp.fluid.src : post.frontmatter[lang].featuredimage}`}
                        style={{
                          filter: "grayscale(100%)",
                        }}
                      />
                    </div>
                  ) : null}
                  <div className="flex flex-col justify-between">
                    <p className="text-xl max-w-xl">
                      {this.getNonEmpty(post.frontmatter, "description")}
                    </p>
                    <Link to={`/${lang}${post.fields.slug}`} className="pt-4 text-sm font-bold">
                      {lang === 'hr' && <span>Cijela objava →</span>}
                      {lang === 'en' && <span>Full post →</span>}
                    </Link>
                  </div>
                </p>
              </article>
            </div>
            </Link>
          ))}
          </div>
      </section>
    )
  }
}

Feed.propTypes = {
  activity: PropTypes.string,
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  })
}

export default Feed