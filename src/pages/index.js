import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Card from "../components/Card"
import Container from "../components/Container"
import CardList from "../components/CardList"

const IndexPage = ({data}) => {
  const posts = data.silverstripe.readAppPosts.edges;
  const featuredPost = posts[0].node

  return (
    <Layout>
      <Container>
        <CardList>
          <Card {...featuredPost} featured />
          {posts.slice(1).map(({node: post}) => (
            <Card key={post.URLSegment} {...post} />
          ))}
        </CardList>
      </Container>
    </Layout>
  )
}


export const query = graphql`
  {
    silverstripe {
      readAppPosts {
        edges {
          node {
            URLSegment
            Title
            LastEdited
            Excerpt
            HeroImage {
              getAbsoluteURL
            }
          }
        }
      }
    }
  }
`

export default IndexPage
