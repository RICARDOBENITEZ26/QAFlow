import { describe, expect, it } from "vitest";
import { sanitizeLogContext } from "@/lib/logging/logger";

describe("logger", () => {
  it("redacts sensitive values from log context", () => {
    const sanitized = sanitizeLogContext({
      userId: "user_123",
      authToken: "secret-token",
      password: "plain-password",
      enabled: true,
    });

    expect(sanitized).toEqual({
      userId: "user_123",
      authToken: "[REDACTED]",
      password: "[REDACTED]",
      enabled: true,
    });
  });
});
