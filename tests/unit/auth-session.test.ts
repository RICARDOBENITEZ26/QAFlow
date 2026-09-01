import { describe, expect, it } from "vitest";
import { UnauthorizedError } from "@/lib/errors";
import { toAuthenticatedSession } from "@/lib/auth/session";

describe("toAuthenticatedSession", () => {
  it("rejects missing sessions", () => {
    expect(() => toAuthenticatedSession(null)).toThrow(UnauthorizedError);
  });

  it("rejects sessions without a user id", () => {
    expect(() =>
      toAuthenticatedSession({
        user: {
          id: "",
          name: "Cristian",
          email: "cristian@example.com",
        },
        expires: "2099-01-01T00:00:00.000Z",
      }),
    ).toThrow(UnauthorizedError);
  });

  it("returns a minimal authenticated session DTO", () => {
    expect(
      toAuthenticatedSession({
        user: {
          id: "user_123",
          name: "Cristian",
          email: "cristian@example.com",
          image: null,
        },
        expires: "2099-01-01T00:00:00.000Z",
      }),
    ).toEqual({
      user: {
        id: "user_123",
        name: "Cristian",
        email: "cristian@example.com",
        image: null,
      },
      expires: "2099-01-01T00:00:00.000Z",
    });
  });
});
