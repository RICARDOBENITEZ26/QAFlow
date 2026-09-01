import { describe, expect, it } from "vitest";
import { ForbiddenError, toErrorResponse, ValidationError } from "@/lib/errors";

describe("application errors", () => {
  it("maps typed application errors to a safe public response", () => {
    const response = toErrorResponse(new ForbiddenError(), "req_test");

    expect(response).toEqual({
      error: {
        code: "FORBIDDEN",
        message: "You do not have permission to perform this action.",
        requestId: "req_test",
      },
    });
  });

  it("preserves status codes for validation errors", () => {
    const error = new ValidationError();

    expect(error.statusCode).toBe(400);
    expect(error.code).toBe("VALIDATION_ERROR");
  });
});
