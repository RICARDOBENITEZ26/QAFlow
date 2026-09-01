# QAFlow

## Product Overview

QAFlow is a modern QA test management platform for teams that need structured control over requirements, test suites, test cases, test runs, bugs, evidence, reports, and quality dashboards.

## Objective

The goal is to build a recruiter-ready SaaS portfolio project that demonstrates frontend engineering, full stack fundamentals, QA automation discipline, secure development practices, and professional documentation.

## Current Status

Milestone 2: Authentication & Authorization foundation.

This repository currently contains the engineering foundation and the first authentication foundation. Full RBAC, organizations, projects, test management workflows, dashboards, billing, and AI features are intentionally out of scope for this stage.

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript strict mode
- Tailwind CSS 4
- PostgreSQL
- Prisma 7
- Auth.js / NextAuth beta
- Zod
- Vitest
- React Testing Library
- Playwright
- Docker
- GitHub Actions
- CodeQL
- Dependabot

## Current Features

- Temporary responsive QAFlow foundation page.
- Health endpoint at `/api/health`.
- Auth.js route handler at `/api/auth/[...nextauth]`.
- Protected session endpoint at `/api/me`.
- TypeScript strict mode.
- Centralized application error foundation.
- Safe logging abstraction with sensitive-key redaction.
- Prisma 7 schema, config, client generation, and seed script.
- Unit test setup with Vitest and React Testing Library.
- E2E smoke test setup with Playwright.
- GitHub Actions CI, CodeQL, Dependabot, issue templates, and PR template.
- Docker Compose PostgreSQL configuration.

## Architecture Summary

QAFlow is planned as a modular monolith. The application is organized by product features and shared infrastructure modules. This keeps the project professional while staying maintainable for one developer.

## Repository Structure

```text
.github/      GitHub Actions, CodeQL, Dependabot, issue templates, PR template
docs/         Product, architecture, security, testing, and delivery docs
e2e/          Playwright tests
prisma/       Prisma schema and seed script
public/       Static assets
src/app/      Next.js App Router routes and pages
src/lib/      Shared infrastructure such as errors, logging, config, db
tests/        Unit and integration test structure
```

## Requirements

- Node.js 24 or compatible current LTS/runtime
- npm 11+
- Docker Desktop for local PostgreSQL

## Local Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

## Environment Variables

Use `.env.example` as the template. Real `.env` files are ignored by Git.

- `DATABASE_URL`: PostgreSQL connection URL.
- `DIRECT_URL`: direct PostgreSQL connection URL for Prisma workflows.
- `AUTH_SECRET`: Auth.js secret. Generate a real value outside Git.
- `AUTH_TRUST_HOST`: allow Auth.js to trust forwarded host headers in supported deployments.
- `AUTH_GITHUB_ID`: optional GitHub OAuth client ID.
- `AUTH_GITHUB_SECRET`: optional GitHub OAuth client secret.
- `NEXT_PUBLIC_APP_URL`: public application URL.

## PostgreSQL and Docker

Start PostgreSQL:

```bash
docker compose up -d postgres
```

The Compose service includes a healthcheck and uses development-only placeholder credentials.

## Prisma

Generate Prisma Client:

```bash
npm run db:generate
```

Run migrations:

```bash
npm run db:migrate
```

Seed development data:

```bash
npm run db:seed
```

## Testing

```bash
npm run format:check
npm run lint
npm run typecheck
npm run test
npm run build
npm run test:e2e
```

For local E2E testing, start the app first:

```bash
npm run dev -- -H 127.0.0.1 -p 3100
npm run test:e2e
```

## Available Scripts

- `npm run dev`: start the development server.
- `npm run build`: create a production build.
- `npm run start`: run the production server.
- `npm run lint`: run ESLint.
- `npm run typecheck`: run TypeScript without emitting files.
- `npm run format`: format files with Prettier.
- `npm run format:check`: verify formatting.
- `npm run test`: run unit tests.
- `npm run test:watch`: run tests in watch mode.
- `npm run test:e2e`: run Playwright tests.
- `npm run db:generate`: generate Prisma Client.
- `npm run db:migrate`: run development migrations.
- `npm run db:seed`: seed data.
- `npm run db:studio`: open Prisma Studio.

Prisma 7 generates the client into `src/generated/prisma` and reads CLI datasource configuration from `prisma.config.ts`.

## Authentication

Auth.js is configured with the Prisma adapter and optional GitHub OAuth provider settings. If GitHub credentials are not present, no OAuth provider is enabled. Protected server-side code should use `requireAuthenticatedSession()` and return only minimal DTOs to clients.

## CI/CD

GitHub Actions runs formatting, linting, type checking, unit tests, build, and Playwright E2E tests on pull requests and pushes to `main` or `develop`.

## Security

- No secrets are committed.
- Real environment files are ignored.
- CodeQL and Dependabot are configured.
- Error handling and logging foundations avoid leaking sensitive data.

## Roadmap

1. Project Foundation
2. Authentication and Authorization foundation
3. Organizations and Projects
4. Requirements, Test Suites, and Test Cases
5. Test Runs, Bugs, and Evidence
6. Dashboards, Reports, and Portfolio Polish

## Author

Cristian Ricardo Benítez  
Frontend-Focused Full Stack Developer | QA-minded
