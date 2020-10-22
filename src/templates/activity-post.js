import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const ActivityPostTemplate = ({
  content,
  contentComponent,
  date,
  description,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <div className="max-w-2xl m-auto py-24 px-6">
        <h1 className="font-extrabold text-4xl md:text-6xl leading-none">
          {title}
        </h1>
        <p className="mt-4 text-lg">Datum održavanja: {date}</p>
        <p className="py-12 font-light text-2xl md:text-4xl leading-tight">{description}</p>
        <PostContent className="text-xl clean-formatting" content={content} />
      </div>
    </section>
  )
}

ActivityPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const ActivityPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout background={true}>
      <ActivityPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        date={post.frontmatter.date}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

ActivityPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default ActivityPost

export const pageQuery = graphql`
  query ActivityPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "DD. MM. YYYY.")
        title
        description
      }
    }
  }
`
