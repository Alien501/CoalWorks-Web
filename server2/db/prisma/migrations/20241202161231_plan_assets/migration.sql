/*
  Warnings:

  - You are about to drop the column `workAreaId` on the `Plan` table. All the data in the column will be lost.
  - You are about to drop the column `workAreaType` on the `Plan` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Plan" DROP COLUMN "workAreaId",
DROP COLUMN "workAreaType";

-- CreateTable
CREATE TABLE "PlanAssets" (
    "id" SERIAL NOT NULL,
    "planId" INTEGER NOT NULL,
    "assetId" INTEGER NOT NULL,
    "assetName" TEXT NOT NULL,

    CONSTRAINT "PlanAssets_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PlanAssets" ADD CONSTRAINT "PlanAssets_planId_fkey" FOREIGN KEY ("planId") REFERENCES "Plan"("planId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlanAssets" ADD CONSTRAINT "PlanAssets_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "Asset"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
