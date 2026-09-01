import { beforeEach, describe, expect, it, vi } from "vitest";
import { UnauthorizedError } from "@/lib/errors";
import { requireAuthenticatedSession } from "@/lib/auth/session";
import { GET } from "@/app/api/me/route";

vi.mock("@/lib/auth/session", () => ({
  requireAuthenticatedSession: vi.fn(),
}));

const mockedRequireAuthenticatedSession = vi.mocked(requireAuthenticatedSession);

describe("GET /api/me", () => {
  beforeEach(() => {
    mockedRequireAuthenticatedSession.mockReset();
  });

  it("returns 401 when the user is not authenticated", async () => {
    mockedRequireAuthenticatedSession.mockRejectedValue(new UnauthorizedError());

    const response = await GET();

    await expect(response.json()).resolves.toEqual({
      error: {
        code: "UNAUTHORIZED",
        message: "Authentication is required.",
      },
    });
    expect(response.status).toBe(401);
  });

  it("returns the authenticated user DTO", async () => {
    mockedRequireAuthenticatedSession.mockResolvedValue({
      user: {
        id: "user_123",
        name: "Cristian",
        email: "cristian@example.com",
        image: null,
      },
      expires: "2099-01-01T00:00:00.000Z",
    });

    const response = await GET();

    await expect(response.json()).resolves.toEqual({
      user: {
        id: "user_123",
        name: "Cristian",
        email: "cristian@example.com",
        image: null,
      },
    });
    expect(response.status).toBe(200);
  });
});
