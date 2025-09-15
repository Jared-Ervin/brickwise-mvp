import { gql } from "@apollo/client/core";
import { useQuery } from "@apollo/client/react";

const PING_QUERY = gql`
  query Ping {
    ping
  }
`;

export function Ping() {
  const { data, loading, error } = useQuery(PING_QUERY);

  if (loading) return <p>Loading ping...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <p>API says: {data?.ping}</p>;
}

export default Ping;
