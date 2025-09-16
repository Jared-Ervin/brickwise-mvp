import { pgTable, text, timestamp, pgEnum } from 'drizzle-orm/pg-core';

export const offeringStatusEnum = pgEnum('offering_status', ['DRAFT', 'ACTIVE', 'CLOSED']);

export const offerings = pgTable('offerings', {
  id: text('id').primaryKey(),
  title: text('title').notNull(),
  status: offeringStatusEnum('status').notNull().default('DRAFT'),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
});

export type Offering = typeof offerings.$inferSelect;
export type NewOffering = typeof offerings.$inferInsert;

