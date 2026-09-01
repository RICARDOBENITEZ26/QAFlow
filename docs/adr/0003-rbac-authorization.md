# ADR 0003: RBAC Authorization

## Status

Accepted

## Context

QAFlow has clear user roles: Admin, QA Lead, QA Engineer, Developer, and Viewer.

## Decision

Use role-based access control with organization and project membership checks.

## Consequences

- Permissions can be centralized and tested.
- Server-side enforcement is required for every protected operation.
- More advanced attribute-based rules can be added later if needed.
