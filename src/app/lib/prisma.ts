import { PrismaClient } from "@prisma/client/extension";
import { PrismaPg } from "@prisma/adapter-pg";

export const createPrismClient = () => {
  const adapter = new PrismaPg({
    connectionString: process.env.PRISMA_DATABASE_URL,
  });

  return new PrismaClient({
    adapter,
  });
};
