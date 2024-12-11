/*
  Warnings:

  - You are about to drop the `SoftwareIntegration` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "RiskAssesment" ADD COLUMN     "noOfSections" INTEGER NOT NULL DEFAULT 2,
ADD COLUMN     "noOfSectionsCompleted" INTEGER NOT NULL DEFAULT 0;

-- DropTable
DROP TABLE "SoftwareIntegration";

-- CreateTable
CREATE TABLE "software_integrations" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "software_integrations_pkey" PRIMARY KEY ("id")
);
