# Environment Strategy

## Development

- `.env.local`
- Local Next.js dev server
- Docker Compose PostgreSQL

## Testing

- `.env.test`
- Isolated test database when integration tests are introduced
- Deterministic seed data

## Production

- Managed PostgreSQL
- Secure secrets
- Production logging
- Debug output disabled

`.env.example` documents required variables without committing real secrets.
