# Database

QAFlow uses PostgreSQL with Prisma 7.

Prisma 7 keeps datasource URLs in `prisma.config.ts`, not in `prisma/schema.prisma`. The runtime client uses the PostgreSQL driver adapter from `@prisma/adapter-pg`.

## Milestone 1 Model

Milestone 1 intentionally includes only one minimal model:

- `FoundationCheck`: validates that Prisma schema, client generation, and seed scripts are wired correctly.

## Future Model Areas

- Users and sessions.
- Organizations and memberships.
- Projects and project roles.
- Requirements.
- Test suites.
- Test cases and steps.
- Test runs and execution results.
- Bugs.
- Evidence.
- Audit logs.

All future schema changes must use Prisma migrations and preserve relational integrity.
