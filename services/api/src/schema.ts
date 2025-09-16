import { db, schema, dbAvailable } from './db';

export const resolvers = {
  Query: {
    hello: async () => 'Hello from Brickwise API',
    offerings: async (_: unknown, args: { first?: number }) => {
      const n = Math.min(Math.max(args.first ?? 5, 1), 50);
      if (!dbAvailable) {
        return Array.from({ length: n }).map((_, i) => ({
          id: `demo-${i + 1}`,
          title: `Demo Offering ${i + 1}`,
          status: 'ACTIVE',
        }));
      }
      try {
        const rows = await db.select().from(schema.offerings).limit(n);
        return rows.map((r) => ({ id: r.id, title: r.title, status: r.status }));
      } catch {
        return [];
      }
    },
  },
} as const;
