/*
  Warnings:

  - You are about to drop the column `riskContolPlan` on the `RiskAssesment` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "RiskAssesment" DROP COLUMN "riskContolPlan",
ADD COLUMN     "riskControlPlan" JSONB;
