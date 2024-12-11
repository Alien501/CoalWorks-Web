-- AlterTable
ALTER TABLE "RiskAssesment" ADD COLUMN     "noOfSections" INTEGER NOT NULL DEFAULT 2,
ADD COLUMN     "noOfSectionsCompleted" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "SoftwareIntegration" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "SoftwareIntegration_pkey" PRIMARY KEY ("id")
);
