# Testing Strategy

QAFlow follows a practical test pyramid.

## Unit Tests

Vitest verifies domain rules, application errors, validation schemas, and UI rendering behavior.

## Integration Tests

Future integration tests should cover API route handlers, Prisma repositories, validation failures, and authorization failures.

## E2E Tests

Playwright verifies browser-level workflows. Milestone 1 includes a home page smoke test.

Local E2E runs expect the app to be available at `http://127.0.0.1:3100`. CI starts and stops the app automatically before running Playwright.

## Rule

Do not create fake tests that pass without verifying real behavior.
