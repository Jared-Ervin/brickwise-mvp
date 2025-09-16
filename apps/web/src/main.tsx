import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles.css';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';

const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:4000/graphql';
const client = new ApolloClient({
  link: new HttpLink({ uri: apiUrl }),
  cache: new InMemoryCache(),
});

const container = document.getElementById('root');
if (!container) throw new Error('Root container missing');
createRoot(container).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
