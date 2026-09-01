# ADR 0002: REST API

## Status

Accepted

## Context

QAFlow needs clear, testable API boundaries that are easy to document.

## Decision

Use REST APIs for product operations.

## Consequences

- Easier OpenAPI documentation later.
- Straightforward testing with route handlers.
- Less flexible than GraphQL, but simpler for this scope.
