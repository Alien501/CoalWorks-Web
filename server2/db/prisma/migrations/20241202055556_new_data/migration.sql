/*
  Warnings:

  - You are about to drop the column `workArea` on the `Plan` table. All the data in the column will be lost.
  - Added the required column `form` to the `Plan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Plan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `filePath` to the `Planfiles` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PlanStatus" AS ENUM ('Draft', 'Unpublished', 'Published');

-- AlterTable
ALTER TABLE "Plan" DROP COLUMN "workArea",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "form" JSONB NOT NULL,
ADD COLUMN     "status" "PlanStatus" NOT NULL DEFAULT 'Draft',
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "workAreaId" INTEGER,
ADD COLUMN     "workAreaType" TEXT;

-- AlterTable
ALTER TABLE "Planfiles" ADD COLUMN     "filePath" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Asset" (
    "assetId" SERIAL NOT NULL,
    "assetName" VARCHAR(255) NOT NULL,
    "assetDescription" VARCHAR(255) NOT NULL,
    "assetModel" VARCHAR(255) NOT NULL,
    "assetType" INTEGER,
    "asssetLocation" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Asset_pkey" PRIMARY KEY ("assetId")
);

-- AddForeignKey
ALTER TABLE "Plan" ADD CONSTRAINT "Plan_largeSection_fkey" FOREIGN KEY ("workAreaId") REFERENCES "large_sections"("sectionId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Plan" ADD CONSTRAINT "Plan_mediumSection_fkey" FOREIGN KEY ("workAreaId") REFERENCES "medium_sections"("sectionId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Plan" ADD CONSTRAINT "Plan_smallSection_fkey" FOREIGN KEY ("workAreaId") REFERENCES "small_sections"("sectionId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Plan" ADD CONSTRAINT "Plan_microSection_fkey" FOREIGN KEY ("workAreaId") REFERENCES "micro_sections"("sectionId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Plan" ADD CONSTRAINT "Plan_unitSection_fkey" FOREIGN KEY ("workAreaId") REFERENCES "unit_sections"("unitId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Asset" ADD CONSTRAINT "Asset_assetType_fkey" FOREIGN KEY ("assetType") REFERENCES "section_items"("itemId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Asset" ADD CONSTRAINT "Asset_largeSection_fkey" FOREIGN KEY ("asssetLocation") REFERENCES "large_sections"("sectionId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Asset" ADD CONSTRAINT "Asset_mediumSection_fkey" FOREIGN KEY ("asssetLocation") REFERENCES "medium_sections"("sectionId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Asset" ADD CONSTRAINT "Asset_smallSection_fkey" FOREIGN KEY ("asssetLocation") REFERENCES "small_sections"("sectionId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Asset" ADD CONSTRAINT "Asset_unitSection_fkey" FOREIGN KEY ("asssetLocation") REFERENCES "unit_sections"("unitId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Asset" ADD CONSTRAINT "Asset_microSection_fkey" FOREIGN KEY ("asssetLocation") REFERENCES "micro_sections"("sectionId") ON DELETE SET NULL ON UPDATE CASCADE;
