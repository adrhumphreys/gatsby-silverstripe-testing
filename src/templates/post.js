import React from 'react'
import {graphql} from 'gatsby'
import config from '../utils/config'
import Helmet from "react-helmet/es/Helmet";

import Layout from '../components/Layout'
import Hero from "../components/Hero";
import Container from "../components/Container";
import PageBody from "../components/PageBody";
import PostDate from "../components/PostDate";

const PostTemplate = ({data, pageContext}) => {
  const {
    Title,
    Content,
    LastEdited,
    HeroImage
  } = data.silverstripe.readOneAppPost;

  // const previous = pageContext.prev
  // const next = pageContext.next

  return (
    <Layout>
      <Helmet>
        <title>{`${Title} - ${config.siteTitle}`}</title>
      </Helmet>
      <Hero title={Title} image={HeroImage.getAbsoluteURL} height={'50vh'}/>
      <Container>
        <PostDate date={LastEdited}/>
        <PageBody body={Content}/>
      </Container>
    </Layout>
  )
};

export const query = graphql`
  query($id: ID!) {
    silverstripe {
      readOneAppPost(ID: $id) {
        Title
        Content
        URLSegment
        ID
        LastEdited
        HeroImage {
          getAbsoluteURL
        }
      }
    }
  }
`;

export default PostTemplate
