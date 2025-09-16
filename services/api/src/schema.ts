export const typeDefs = /* GraphQL */ `
  type Query {
    hello: String!
  }
`;

export const resolvers = {
  Query: {
    hello: async () => 'Hello from Brickwise API',
  },
} as const;
