/*
  Warnings:

  - Added the required column `formId` to the `RiskAssessmentResponse` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "RiskAssessmentResponse" ADD COLUMN     "formId" INTEGER NOT NULL;
