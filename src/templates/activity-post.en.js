import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import ReactMarkdownWithHtml from "react-markdown/with-html";
import gfm from 'remark-gfm'

import Hero from '../components/Hero'
import Layout from '../components/Layout'

export const ActivityPostENTemplate = ({
  content,
  date,
  description,
  title,
  helmet,
  lang
}) => {
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
            <span>Date of the event: </span>
            {new Date(date).toLocaleDateString(lang)}
          </p>
          <p className="pt-2 pb-12 font-light text-2xl md:text-4xl leading-tight">{description}</p>
          <ReactMarkdownWithHtml plugins={[gfm]} className="text-xl clean-formatting" children={content} allowDangerousHtml />
        </div>
      </section>
    </React.Fragment>
  )
}

ActivityPostENTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  lang: PropTypes.string
}

function getNonEmpty(frontmatter, field) {
  const lang = "en";
  return frontmatter[lang][field] || frontmatter["hr"][field] || frontmatter["en"][field];
}

const ActivityENPost = ({ data }) => {
  const { markdownRemark: post } = data
  const frontmatter = post.frontmatter;

  return (
    <Layout lang="en">
      <ActivityPostENTemplate
        content={getNonEmpty(frontmatter, "body")}
        date={post.frontmatter.en.date}
        description={getNonEmpty(frontmatter, "description")}
        helmet={
          <Helmet titleTemplate="%s">
            <title>{getNonEmpty(frontmatter, "title")}</title>
            <meta
              name="description"
              content={getNonEmpty(frontmatter, "description")}
            />
          </Helmet>
        }
        lang="en"
        title={getNonEmpty(frontmatter, "title")}
      />
    </Layout>
  )
}

ActivityENPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default ActivityENPost

export const pageQuery = graphql`
  query ActivityENPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        hr {
          body
          date
          title
          description
        }
        en {
          body
          date
          title
          description
        }
      }
    }
  }
`
