import React from 'react';
import './css/App.css';
import '@clayui/css/lib/css/atlas.css';
import BlogList from './components/BlogList';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
// Don't forget to create a file '.env.local'
// and to add keys & values that we're using in this app
// according to your environment.
import 'dotenv/config';

export default function App() {
  return (
    <ApolloProvider client={createApolloClient()}>
      <div className="lfug-react-app">
        <div className="container">
          <h1 className="text-center mb-4">Blogs</h1>
          <BlogList />
        </div>
      </div>
    </ApolloProvider>
  );
}

function createApolloClient() {
  let endpoint;
  const user = process.env.REACT_APP_LIFERAY_USER;
  const password = process.env.REACT_APP_LIFERAY_PASSWORD;
  const base64credentials = new Buffer(`${user}:${password}`).toString(
    'base64'
  );

  endpoint =
    process.env.REACT_APP_LIFERAY_HOST +
    process.env.REACT_APP_LIFERAY_GRAPHQL_ENDPOINT;

  return new ApolloClient({
    uri: endpoint,
    headers: {
      Authorization: 'Basic ' + base64credentials
    }
  });
}

export function Liferay() {
  return window['Liferay'];
}
