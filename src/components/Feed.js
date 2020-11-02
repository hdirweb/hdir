import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

class Feed extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const lang = this.props.lang;
    return (
      <section className="py-24">
        <div className="limit">
        {posts &&
          posts.map(({ node: post }) => (
            <Link to={post.fields.slug}>
            <div key={post.id} className="max-w-4xl">
              <article className="bg-white p-8 shadow rounded-lg mb-12">
                <header className="flex justify-between mb-4 flex-col sm:flex-row">
                  <span className="text-3xl font-bold leading-tight">
                    {post.frontmatter.title}
                  </span>
                  <span className="sm:pl-4 text-lg sm:self-start sm:pt-1 w-48 sm:text-right">
                    {new Date(post.frontmatter.date).toLocaleDateString(lang)}
                  </span>
                </header>
                <p className="flex flex-col sm:flex-row">
                  {post.frontmatter.featuredimage ? (
                    <div className="pr-6 pb-6">
                      <img 
                        className="z-40 relative rounded-lg"
                        alt=""
                        src={`${!!post.frontmatter.featuredimage.childImageSharp ? post.frontmatter.featuredimage.childImageSharp.fluid.src : post.frontmatter.featuredimage}`}
                        style={{
                          filter: "grayscale(100%)",
                        }}
                      />
                    </div>
                  ) : null}
                  <div className="flex flex-col justify-between">
                    <p className="text-xl max-w-xl">
                      {post.frontmatter.description}
                    </p>
                    <Link to={post.fields.slug} className="pt-4 text-sm font-bold">
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
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  })
}

export default Feed