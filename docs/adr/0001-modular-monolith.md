# ADR 0001: Modular Monolith

## Status

Accepted

## Context

QAFlow must look like a real product while remaining maintainable by one developer.

## Decision

Use a modular monolith with Next.js.

## Consequences

- Simpler local development and deployment.
- Strong separation by modules without distributed-system overhead.
- Future extraction remains possible if a module becomes independently valuable.
