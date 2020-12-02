const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(
        limit: 10000
        ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
              en {
                templateKey
              }
              hr {
                templateKey
              }
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    // console.log(posts.filter(edge => edge.node.frontmatter.en !== null).map(post => post.node.frontmatter.en.templateKey))

    posts.filter(post => post.node.frontmatter.templateKey !== null).forEach((edge) => {
      const id = edge.node.id
      
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })

    posts.filter(post => post.node.frontmatter.en !== null).forEach((edge) => {
      const id = edge.node.id
      
      createPage({
        path: '/en' + edge.node.fields.slug,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.en.templateKey)}.en.js`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })

    posts.filter(post => post.node.frontmatter.hr !== null).forEach((edge) => {
      const id = edge.node.id
      
      createPage({
        path: '/hr' + edge.node.fields.slug,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.hr.templateKey)}.hr.js`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })

  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
