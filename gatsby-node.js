/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`)

exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions

  const loadPosts = new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve(`src/templates/post.js`)
    resolve(
      graphql(
        `
      {
        silverstripe {
          readAppPosts {
            edges {
              node {
                ID
                URLSegment
              }
            }
          }
        }
      }
    `).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        // Create blog post pages.
        const pages = result.data.silverstripe.readAppPosts.edges
        pages.forEach(({node}) => {
          const id = `${node.ID}`;
          createPage({
            path: `posts/${node.URLSegment}`, // required
            component: blogPostTemplate,
            context: {
              id: id,
            },
          })
        })
      })
    )
  })


  const loadPages = new Promise((resolve, reject) => {
    const pageTemplate = path.resolve(`src/templates/page.js`)
    resolve(
      graphql(
        `
      {
        silverstripe {
          readAppContentPages {
            edges {
              node {
                ID
                URLSegment
              }
            }
          }
        }
      }
    `).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        const pages = result.data.silverstripe.readAppContentPages.edges
        pages.forEach(({node}) => {
          const id = `${node.ID}`;
          createPage({
            path: `${node.URLSegment}`,
            component: pageTemplate,
            context: {
              id: id,
            },
          })
        })
      })
    )
  })

  return Promise.all([loadPages])
}
