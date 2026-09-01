import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";
import { logger } from "../src/lib/logging/logger";

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL is required to seed the database.");
}

const prisma = new PrismaClient({
  adapter: new PrismaPg({
    connectionString: databaseUrl,
  }),
});

async function main() {
  await prisma.foundationCheck.upsert({
    where: { name: "milestone-1-foundation" },
    update: {},
    create: { name: "milestone-1-foundation" },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error: unknown) => {
    logger.error("Database seed failed.", {
      error: error instanceof Error ? error.message : "Unknown error",
    });
    await prisma.$disconnect();
    process.exit(1);
  });
