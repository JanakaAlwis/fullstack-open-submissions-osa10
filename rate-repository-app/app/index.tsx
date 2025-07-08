import React from 'react';
import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/client';

import Main from '../src/Main';
import createApolloClient from '../src/utils/apolloClient';

const client = createApolloClient();

export default function Page() {
  return (
    <ApolloProvider client={client}>
      <NativeRouter>
        <Main />
      </NativeRouter>
    </ApolloProvider>
  );
}
