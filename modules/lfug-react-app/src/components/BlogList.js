import React from 'react';
import Blog from './Blog';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const SITE_ID = 20124;

const ALL_BLOGS = gql`
  query {
    blogPostings(siteId: ${SITE_ID}) {
      items {
        id
        headline
        articleBody
        datePublished
        creator {
          name
        }
      }
      page
      totalCount
    }
  }
`;

export default function BlogList() {
  const { loading, error, data } = useQuery(ALL_BLOGS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const blogs = data.blogPostings.items.map(
    ({ id, headline, articleBody, creator }) => (
      <Blog
        key={id}
        title={headline}
        author={creator.name}
        body={articleBody}
      />
    )
  );

  return <div className="row">{blogs}</div>;
}
