import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
declare global {
  var prisma: PrismaClient | undefined;
}
export const createPrismaClient = () => {
  const adapter = new PrismaPg({
    connectionString: process.env.PRISMA_DATABASE_URL,
  });
  return new PrismaClient({ log: ["query", "info", "warn", "error"] });
};
export const prisma = global.prisma ?? createPrismaClient();
if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}
if (process.env.NODE_ENV !== "production") global.prisma = prisma;
