import React from 'react';
import { useQuery } from '@apollo/client';
import { HelloDocument } from './gql/graphql';

function App() {
  const { data, loading, error } = useQuery(HelloDocument);
  return (
    <div style={{ padding: 24 }}>
      <h1>Brickwise Web</h1>
      {loading && <p>Loading…</p>}
      {error && <p style={{ color: 'crimson' }}>Error: {error.message}</p>}
      {data && <p>API says: {data.hello}</p>}
    </div>
  );
}

export default App;
