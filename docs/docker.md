# Docker

Milestone 1 includes:

- `docker-compose.yml` for PostgreSQL.
- `Dockerfile` for production-like application build validation.
- `.dockerignore` to keep builds clean.

## PostgreSQL

Start the database:

```bash
docker compose up -d postgres
```

Development credentials are placeholders only and must not be reused in production.
