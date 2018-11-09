import React from 'react'
import {graphql} from 'gatsby'
import config from '../utils/config'
import Helmet from "react-helmet/es/Helmet";

import Layout from '../components/Layout'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import PageBody from '../components/PageBody'

const PageTemplate = ({ data, pageContext }) => {
  const {
    Title,
    Content
  } = data.silverstripe.readOneAppContentPage;

  return (
    <Layout>
      <Helmet>
        <title>{`${Title} - ${config.siteTitle}`}</title>
      </Helmet>
      <Container>
        <PageTitle>{Title}</PageTitle>
        <PageBody body={Content} />
      </Container>
    </Layout>
  )
};



export const query = graphql`
  query($id: ID!) {
    silverstripe {
      readOneAppContentPage(ID: $id) {
        Title
        Content
      }
    }
  }
`;

export default PageTemplate
