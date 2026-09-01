import { describe, expect, it } from "vitest";
import { createAuthProviders } from "@/lib/auth/providers";

describe("createAuthProviders", () => {
  it("returns no providers when OAuth credentials are missing", () => {
    expect(createAuthProviders({})).toEqual([]);
  });

  it("enables GitHub only when both credentials are configured", () => {
    const providers = createAuthProviders({
      AUTH_GITHUB_ID: "github-client-id",
      AUTH_GITHUB_SECRET: "github-client-secret",
    });

    expect(providers).toHaveLength(1);
  });
});
