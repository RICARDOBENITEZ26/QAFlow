import type { NextAuthConfig } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { env } from "@/lib/config/env";
import { prisma } from "@/lib/db/prisma";
import { createAuthProviders } from "./providers";

export const authConfig = {
  adapter: PrismaAdapter(prisma),
  providers: createAuthProviders(env),
  secret: env.AUTH_SECRET,
  trustHost: env.AUTH_TRUST_HOST,
  session: {
    strategy: "database",
  },
  callbacks: {
    session({ session, user }) {
      if (session.user && user.id) {
        session.user.id = user.id;
      }

      return session;
    },
  },
} satisfies NextAuthConfig;
