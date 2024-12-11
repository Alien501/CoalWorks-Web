/*
  Warnings:

  - You are about to drop the `ShiftTemplateQuestion` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ShiftTemplateQuestion" DROP CONSTRAINT "ShiftTemplateQuestion_templateId_fkey";

-- AlterTable
ALTER TABLE "RiskAssesment" ALTER COLUMN "noOfSections" DROP NOT NULL;

-- AlterTable
ALTER TABLE "RiskValues" ALTER COLUMN "scale" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "ShiftTemplate" ADD COLUMN     "shiftTemplate" JSONB;

-- DropTable
DROP TABLE "ShiftTemplateQuestion";
