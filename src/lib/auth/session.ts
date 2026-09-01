import type { Session } from "next-auth";
import { UnauthorizedError } from "@/lib/errors";

export type AuthenticatedSession = {
  user: {
    id: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
  expires?: string;
};

export function toAuthenticatedSession(session: Session | null): AuthenticatedSession {
  if (!session?.user?.id) {
    throw new UnauthorizedError();
  }

  return {
    user: {
      id: session.user.id,
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
    },
    expires: session.expires,
  };
}

export async function requireAuthenticatedSession(): Promise<AuthenticatedSession> {
  const { auth } = await import("./index");
  const session = await auth();

  return toAuthenticatedSession(session);
}
