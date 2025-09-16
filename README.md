Brickwise Monorepo

This repository contains the apps, services, and shared packages for Brickwise.

Getting started
- Requires Bun 1.1+ and Node 18+ installed locally.
- From the repo root, run `bun install` to install workspace dependencies.
- Run `bun run dev` to start web, admin, and api together.
- Run `bun run codegen` to generate GraphQL types and client helpers.

Local database (optional)
- If you have Docker: start Postgres + Redis with `docker compose up -d`
- If you do NOT have Docker: set `USE_DB=false` in `services/api/.env` to run without a DB (in-memory stubs)
- Configure API env: copy `services/api/.env.example` to `services/api/.env` and adjust as needed.
- Generate migrations: `bun run db:generate` (only if DB is available)
- Start API: `bun --cwd services/api dev`
- With DB available, the API reads Offerings from Postgres; otherwise it serves stub data.

Packages
- apps/web: Investor/Borrower web app (Vite + React)
- apps/admin: Admin console (Vite + React)
- services/api: Fastify + Mercurius GraphQL API
- packages/config: Shared configs (TS/ESLint presets)
- packages/ui: Shared UI library
- packages/gql-schema: Shared GraphQL schema + codegen output
- packages/db: Drizzle schema and migrations
- packages/types: Shared TypeScript types
- packages/lib: Shared utilities

Notes
- See `docs/brickwise-tech-architecture.md` for system design.
- This is an initial scaffold; fine-tune dependencies and configs as features grow.
