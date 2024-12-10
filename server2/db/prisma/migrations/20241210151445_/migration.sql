/*
  Warnings:

  - You are about to drop the column `Mechanism` on the `RiskAssesment` table. All the data in the column will be lost.
  - Added the required column `mechanism` to the `RiskAssesment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "RiskAssesment" DROP COLUMN "Mechanism",
ADD COLUMN     "mechanism" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "RiskAssessmentResponse" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "riskAssessmentId" INTEGER NOT NULL,
    "response" JSONB,

    CONSTRAINT "RiskAssessmentResponse_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "RiskAssessmentResponse" ADD CONSTRAINT "RiskAssessmentResponse_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RiskAssessmentResponse" ADD CONSTRAINT "RiskAssessmentResponse_riskAssessmentId_fkey" FOREIGN KEY ("riskAssessmentId") REFERENCES "RiskAssesment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
