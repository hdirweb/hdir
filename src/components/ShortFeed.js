import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import { ACTIVITY_DROPDOWN } from './Navbar';

class ShortFeed extends React.Component {
  getImageByActivity(activity) {
    try {
      const image = this.props.recent.images.find(imageObject => imageObject.name === activity).image;
      
      return image?.childImageSharp?.gatsbyImageData?.images.fallback.src || image;
    }
    catch {
      return "";
    }
  }

  getNonEmpty(frontmatter, field) {
    const lang = this.props.lang;
    return frontmatter[lang][field] || frontmatter["hr"][field]  || frontmatter["en"][field] ;
  }

  getActivity(frontmatter) {
    try {
      return ACTIVITY_DROPDOWN.find(activity => activity.en.title.toLowerCase() === this.getNonEmpty(frontmatter, "activity"))[this.props.lang].title
    }
    catch {
      return "";
    }
  }

  render() {
    const { activity, data, recent } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const lang = this.props.lang;

    const isCmsApp = typeof NetlifyCmsApp !== "undefined";
  
    return (
      <section className="py-24">
        <div className="limit">
        <h2 className="title mb-12">{recent.title || ""}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {posts &&
          posts.filter(post => activity !== "" ? post.node.frontmatter[lang].activity === activity : true).map( ({ node: post }, index) => (
            <Link to={`/${lang}${post.fields.slug}`} className={`${index === 0 ? "row-span-2" : ""}`}>
            <div
              key={post.id}
              className="max-w-3xl text-white h-full relative rounded-lg overflow-hidden"
              data-sal={`${isCmsApp ? "" : "slide-right"}`}
              data-sal-easing="ease"
              style={{"--sal-duration": "1.9s"}}
            >
              
              <article
                className="bg-white p-8 shadow h-full bg-cover bg-center relative flex flex-wrap content-end"
                style={{
                  backgroundImage: `url(${
                    this.getImageByActivity(this.getNonEmpty(post.frontmatter, "activity"))
                  })`,
                  minHeight: "30vh",
                }}
              >
                <div 
                  className="absolute top-0 left-0 h-full w-full block"
                  style={{
                    background: "linear-gradient(to bottom, rgba(46,45,45,0) 0, rgba(36, 37, 38, 50) 100%)"
                  }}
                >
                </div>
                <p className="mb-4 z-30 relative">
                  <p className="text-xs font-black leading-tight pb-1">
                    {this.getActivity(post.frontmatter)}
                  </p>
                  <p className="text-4xl font-bold leading-tight">
                    {this.getNonEmpty(post.frontmatter, "title")}
                  </p>
                  <Link className="btn mt-4" to={`/${lang}${post.fields.slug}`}>
                    {lang === 'hr' && <span>Pročitaj više</span>}
                    {lang === 'en' && <span>Read more</span>}
                  </Link>
                </p>
              </article>
            </div>
            </Link>
          ))}
          </div>
          </div>
      </section>
    )
  }
}

ShortFeed.propTypes = {
  activity: PropTypes.string,
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  })
}

export default ShortFeed