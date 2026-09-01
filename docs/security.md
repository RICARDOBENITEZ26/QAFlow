# Security

## Foundation Rules

- Do not commit real secrets.
- Keep `.env` files ignored.
- Validate external input with Zod.
- Enforce authorization on the server.
- Return safe, standardized error responses.
- Avoid logging secrets or sensitive data.
- Use CodeQL and Dependabot.

## Current Milestone

Milestone 1 adds secret-safe environment examples, typed errors, safe logging, CodeQL, and Dependabot.

## Known Dependency Advisory

As of 2026-09-01, `npm audit` reports GHSA-ggr8-5vv4-36mx for `deepmerge-ts <8.0.0` through `prisma -> @prisma/config`.

This is currently tracked as a Prisma CLI/tooling transitive advisory. `npm audit fix --force` proposes a breaking downgrade to Prisma 6.12.0, so the project does not apply it. The mitigation is to keep Dependabot enabled and update `prisma` and `@prisma/client` together when a compatible patched Prisma 7 release is available.
