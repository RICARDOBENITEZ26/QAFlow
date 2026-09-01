# Logging and Observability

Milestone 1 introduces a small logger abstraction so application code does not depend directly on `console.log`.

## Rules

- Use structured logs.
- Include request IDs when available.
- Never log secrets, tokens, passwords, cookies, or authorization headers.
- Add audit logs for security-relevant product actions in later milestones.

## Future Work

- Request correlation IDs.
- Production log ingestion.
- Health and readiness checks.
- Audit trail for role and project changes.
