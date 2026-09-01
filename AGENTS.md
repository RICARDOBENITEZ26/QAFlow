# AGENTS.md

These rules apply to AI agents and contributors working in this repository.

## Architecture

- QAFlow is a modular monolith.
- Keep TypeScript strict mode enabled.
- Maintain separation of concerns between UI, domain, server, data access, and infrastructure.
- Avoid unnecessary abstractions. Add them only when they reduce real complexity.

## Frontend

- Build accessible, responsive interfaces with semantic HTML.
- Prefer Server Components when appropriate.
- Use reusable components for repeated UI patterns.
- Include loading, empty, success, and error states for user-facing workflows.

## Backend

- Validate all external input before it reaches use cases or persistence.
- Enforce authorization on the server.
- Use standardized application errors.
- Never expose secrets, stack traces, or database internals to clients.

## Database

- Use Prisma migrations for schema changes.
- Preserve relational integrity.
- Treat destructive database changes carefully and document the migration risk.

## Testing

- Add tests according to risk.
- Critical business rules require tests.
- Do not ignore, skip, or weaken failing tests to make CI pass.
- Do not generate fake tests that do not verify real behavior.

## Git

- Use Conventional Commits.
- Keep changes focused.
- Use feature branches and pull requests for important work.
- Do not push, merge, or rewrite history without explicit authorization.

## AI

- Generated code must be reviewed before it is trusted.
- Do not introduce dependencies without justification.
- Do not weaken TypeScript, lint, tests, or security rules just to make checks pass.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
