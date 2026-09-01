# CI/CD

GitHub Actions is configured for pull requests and pushes to `main` and `develop`.

## CI Checks

- Install dependencies with `npm ci`.
- Check formatting.
- Run ESLint.
- Run TypeScript typecheck.
- Run unit tests.
- Build the application.
- Run Playwright E2E tests in a separate job.

## Security

CodeQL runs on pull requests, pushes, and a weekly schedule. Dependabot checks npm and GitHub Actions weekly.
