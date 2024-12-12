/*
  Warnings:

  - Added the required column `apiKey` to the `software_integrations` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "software_integrations" ADD COLUMN     "apiKey" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "DgmsFiles" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "path" TEXT NOT NULL,

    CONSTRAINT "DgmsFiles_pkey" PRIMARY KEY ("id")
);
