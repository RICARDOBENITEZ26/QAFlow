# Architecture

QAFlow uses a modular monolith architecture with Next.js App Router.

## Layers

- Presentation: pages, layouts, components, forms, tables, and charts.
- Application: route handlers, server actions, and use cases.
- Domain: rules, permissions, and product logic.
- Data access: Prisma repositories and query services.
- Infrastructure: configuration, logging, errors, auth, storage, and observability.

## Decision

The project avoids microservices because the product is intended to be a professional portfolio project maintained by one developer. A modular monolith keeps deployment, testing, and local development simple while still demonstrating real architecture.

## Current Milestone

Milestone 1 implements only the foundation: configuration, temporary page, health endpoint, typed errors, logging, Prisma setup, tests, Docker, CI, and documentation.
