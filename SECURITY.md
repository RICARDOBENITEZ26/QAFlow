# Security Policy

## Supported Status

QAFlow is currently in Milestone 2: Authentication & Authorization foundation. It is not production software yet.

## Dependency Security Notes

### Prisma CLI Transitive Advisories

- Date reviewed: 2026-09-01
- Advisory: GHSA-ggr8-5vv4-36mx
- Affected transitive package: `deepmerge-ts <8.0.0`
- Package path: `prisma -> @prisma/config -> deepmerge-ts`
- Root package in this repository: `prisma@7.10.0`
- Dependency scope: development/tooling CLI
- Runtime package retained: `@prisma/client@7.10.0`

- Advisory: GHSA-3f6p-5ww8-9rcr
- Affected transitive package: `mysql2 <3.22.0`
- Package path: `prisma -> mysql2`
- Root package in this repository: `prisma@7.10.0`
- Dependency scope: development/tooling CLI
- QAFlow database runtime: PostgreSQL through `pg` and `@prisma/adapter-pg`, not MySQL

`npm audit` and `npm audit --omit=dev` currently report these advisories because npm keeps the Prisma CLI package in the installed dependency graph.

The known fix suggested by npm requires `npm audit fix --force`, which downgrades `prisma` to `6.19.3`. This is a breaking downgrade for the current Prisma 7 configuration and would invalidate the adopted Prisma 7 setup.

## Current Mitigation

- Do not run `npm audit fix --force`.
- Keep `prisma` in `devDependencies`.
- Keep `@prisma/client` and `@prisma/adapter-pg` as runtime dependencies.
- Keep Dependabot enabled for npm updates.
- Update `prisma` and `@prisma/client` together when a compatible patched Prisma 7 release is available.

## Secrets

- Do not commit `.env`, `.env.local`, credentials, tokens, private keys, or production database URLs.
- Use `.env.example` only for placeholders and local development examples.
