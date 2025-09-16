import type { Config } from 'drizzle-kit';

export default {
  schema: './packages/db/src/schema.ts',
  out: './packages/db/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/brickwise',
  },
} satisfies Config;

