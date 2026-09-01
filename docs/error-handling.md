# Error Handling

QAFlow uses typed application errors as the foundation for safe API responses.

## Error Types

- `ValidationError`
- `UnauthorizedError`
- `ForbiddenError`
- `NotFoundError`
- `ConflictError`

## Response Shape

```json
{
  "error": {
    "code": "FORBIDDEN",
    "message": "You do not have permission to perform this action.",
    "requestId": "req_123"
  }
}
```

Unexpected errors must be mapped to a generic public message.
