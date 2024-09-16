import { PrismaClient } from "@prisma/client";
import { configDotenv } from "dotenv";

configDotenv();

const prismaWrite = new PrismaClient({
  dataSources: {
    db: {
      url: process.env.MASTER_DATABASE_URL
    }
  }
});

const prismaRead = new PrismaClient({
  dataSources: {
    db: {
      url: process.env.SLAVE_DATABASE_URL
    }
  }
});

export {
  prismaWrite,
  prismaRead
}