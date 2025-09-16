export const resolvers = {
  Query: {
    hello: async () => 'Hello from Brickwise API',
    offerings: async (_: unknown, args: { first?: number }) => {
      const n = Math.min(Math.max(args.first ?? 5, 1), 50);
      return Array.from({ length: n }).map((_, i) => ({
        id: `demo-${i + 1}`,
        title: `Demo Offering ${i + 1}`,
        status: 'ACTIVE',
      }));
    },
  },
} as const;
