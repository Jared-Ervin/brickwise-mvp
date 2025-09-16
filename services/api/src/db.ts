import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from '@brickwise/db/src/schema';

const connectionString = process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/brickwise';
export const pool = new Pool({ connectionString });
export const db = drizzle(pool, { schema });
export { schema };

export let dbAvailable = false;

export async function initDb(): Promise<boolean> {
  if (String(process.env.USE_DB).toLowerCase() === 'false') {
    dbAvailable = false;
    return dbAvailable;
  }
  try {
    await pool.query('select 1');
    dbAvailable = true;
  } catch {
    dbAvailable = false;
  }
  return dbAvailable;
}
