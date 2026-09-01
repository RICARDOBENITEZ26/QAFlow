# Authentication and Permissions

Authentication starts in Milestone 2 with Auth.js.

## Current Authentication Foundation

- Auth.js is configured for the Next.js App Router.
- Prisma stores users, accounts, sessions, and verification tokens.
- GitHub OAuth can be enabled through environment variables.
- Server-side handlers can call `requireAuthenticatedSession()` to reject unauthenticated requests.
- `/api/me` is a protected foundation endpoint that returns a minimal authenticated user DTO.

Full RBAC is not implemented yet.

## Foundation Rules

- Authentication must be verified on the server.
- Authorization must be enforced through centralized permission policies.
- UI-level hiding is not a security boundary.
- Role checks must include organization or project membership.

## Planned Roles

- Admin
- QA Lead
- QA Engineer
- Developer
- Viewer
