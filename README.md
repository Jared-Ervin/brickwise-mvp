Brickwise Monorepo

This repository contains the apps, services, and shared packages for Brickwise.

Getting started
- Requires Bun 1.1+ and Node 18+ installed locally.
- From the repo root, run `bun install` to install workspace dependencies.
- Run `bun run dev` to start web, admin, and api together.

Packages
- apps/web: Investor/Borrower web app (Vite + React)
- apps/admin: Admin console (Vite + React)
- services/api: Fastify + Mercurius GraphQL API
- packages/config: Shared configs (TS/ESLint presets)
- packages/ui: Shared UI library
- packages/types: Shared TypeScript types
- packages/lib: Shared utilities

Notes
- See `docs/brickwise-tech-architecture.md` for system design.
- This is an initial scaffold; fine-tune dependencies and configs as features grow.

