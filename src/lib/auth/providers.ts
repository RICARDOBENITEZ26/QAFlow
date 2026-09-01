import GitHub from "next-auth/providers/github";

type OAuthProviderEnv = {
  AUTH_GITHUB_ID?: string;
  AUTH_GITHUB_SECRET?: string;
};

function hasProviderCredentials(clientId?: string, clientSecret?: string): boolean {
  return Boolean(clientId && clientSecret);
}

export function createAuthProviders(authEnv: OAuthProviderEnv) {
  if (!hasProviderCredentials(authEnv.AUTH_GITHUB_ID, authEnv.AUTH_GITHUB_SECRET)) {
    return [];
  }

  return [
    GitHub({
      clientId: authEnv.AUTH_GITHUB_ID,
      clientSecret: authEnv.AUTH_GITHUB_SECRET,
    }),
  ];
}
