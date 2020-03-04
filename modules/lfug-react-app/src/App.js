import React from 'react';
import './css/App.css';
import '@clayui/css/lib/css/atlas.css';
import BlogList from './components/BlogList';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import ClayAlert from '@clayui/alert';
// Don't forget to create a file '.env.local'
// and to add keys & values that we're using in this app
// according to your environment.
import 'dotenv/config';

export default function App() {
  return (
    <ApolloProvider client={createApolloClient()}>
      <div className="lfug-react-app">
        <div className="container">
          {isSignedIn() ? (
            <div>
              <h1 className="text-center mb-4">Blogs</h1>
              <BlogList />
            </div>
          ) : (
            <ClayAlert displayType="warning" title="Attention:">
              You need to sign in to see this content.
            </ClayAlert>
          )}
        </div>
      </div>
    </ApolloProvider>
  );
}

function createApolloClient() {
  let endpoint;
  // outside Liferay Portal
  if (process.env.NODE_ENV === 'development') {
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

  endpoint = `${process.env.REACT_APP_LIFERAY_GRAPHQL_ENDPOINT}?p_auth=${
    Liferay().authToken
  }`;

  return new ApolloClient({
    uri: endpoint,
    credentials: 'same-origin'
  });
}

export function isSignedIn() {
  if (process.env.NODE_ENV === 'development') {
    return true;
  }
  return Liferay().ThemeDisplay.isSignedIn();
}

export function Liferay() {
  return window['Liferay'];
}
