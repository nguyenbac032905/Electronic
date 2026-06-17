import "dotenv/config";
import {PrismaClient} from "../prisma/generated/client";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

console.log(process.env.DATABASE_URL);
const adapter = new PrismaMariaDb(
  process.env.DATABASE_URL!
);

const prismaClientSingleton = () => {
    return new PrismaClient({adapter});
}

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClientSingleton | undefined;
}

const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

export default prisma;

if(process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;