import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'

import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const ActivityPostTemplate = ({
  content,
  contentComponent,
  date,
  description,
  title,
  helmet,
  lang
}) => {
  const PostContent = contentComponent || Content

  const hero = {
    height: 28,
    image: "/img/278.jpg",
    link: {
      page: '',
      title: ''
    },
    title: title, 
    top: new Date(date).toLocaleDateString(lang),
    subtitle: ''
  };
  return (
    <React.Fragment>
      <Hero hero={ hero } />
      <section className="section">
        {helmet || ''}
        <div className="max-w-2xl m-auto py-12 px-6">
          <p className="mt-4 text-xl">
            {lang === 'hr' && <span>Datum održavanja: </span>}
            {lang === 'en' && <span>Date of the event: </span>}
            {new Date(date).toLocaleDateString(lang)}
          </p>
          <p className="pt-2 pb-12 font-light text-2xl md:text-4xl leading-tight">{description}</p>
          <PostContent className="text-xl clean-formatting" content={content} />
        </div>
      </section>
    </React.Fragment>
  )
}

ActivityPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  lang: PropTypes.string
}

const ActivityPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout lang={post.frontmatter.lang}>
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
        lang={post.frontmatter.lang}
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
        lang
        date
        title
        description
      }
    }
  }
`
