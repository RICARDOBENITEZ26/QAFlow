# API Design

Base path: `/api`.

## Milestone 1

### `GET /api/health`

Returns service health:

```json
{
  "status": "ok",
  "service": "qaflow"
}
```

## Future API

Future milestones will use REST endpoints for organizations, projects, requirements, test suites, test cases, test runs, bugs, evidence, and reports.

All endpoints must validate input and enforce server-side authorization.
