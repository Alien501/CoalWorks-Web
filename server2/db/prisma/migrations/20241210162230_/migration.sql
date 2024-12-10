/*
  Warnings:

  - You are about to drop the column `riskAssessmentId` on the `RiskAssessmentResponse` table. All the data in the column will be lost.
  - Made the column `response` on table `RiskAssessmentResponse` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "RiskAssessmentResponse" DROP CONSTRAINT "RiskAssessmentResponse_riskAssessmentId_fkey";

-- AlterTable
ALTER TABLE "RiskAssessmentResponse" DROP COLUMN "riskAssessmentId",
ALTER COLUMN "response" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "RiskAssessmentResponse" ADD CONSTRAINT "RiskAssessmentResponse_formId_fkey" FOREIGN KEY ("formId") REFERENCES "RiskAssesment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
