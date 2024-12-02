/*
  Warnings:

  - You are about to drop the column `assetType` on the `Asset` table. All the data in the column will be lost.
  - You are about to drop the column `asssetLocation` on the `Asset` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Asset" DROP CONSTRAINT "Asset_assetType_fkey";

-- DropForeignKey
ALTER TABLE "Asset" DROP CONSTRAINT "Asset_largeSection_fkey";

-- DropForeignKey
ALTER TABLE "Asset" DROP CONSTRAINT "Asset_mediumSection_fkey";

-- DropForeignKey
ALTER TABLE "Asset" DROP CONSTRAINT "Asset_microSection_fkey";

-- DropForeignKey
ALTER TABLE "Asset" DROP CONSTRAINT "Asset_smallSection_fkey";

-- DropForeignKey
ALTER TABLE "Asset" DROP CONSTRAINT "Asset_unitSection_fkey";

-- AlterTable
ALTER TABLE "Asset" DROP COLUMN "assetType",
DROP COLUMN "asssetLocation",
ADD COLUMN     "assetLocation" INTEGER,
ADD COLUMN     "assetTypeId" INTEGER;

-- AddForeignKey
ALTER TABLE "Asset" ADD CONSTRAINT "Asset_assetTypeId_fkey" FOREIGN KEY ("assetTypeId") REFERENCES "section_items"("itemId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Asset" ADD CONSTRAINT "Asset_LargeSection_Location" FOREIGN KEY ("assetLocation") REFERENCES "large_sections"("sectionId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Asset" ADD CONSTRAINT "Asset_MediumSection_Location" FOREIGN KEY ("assetLocation") REFERENCES "medium_sections"("sectionId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Asset" ADD CONSTRAINT "Asset_SmallSection_Location" FOREIGN KEY ("assetLocation") REFERENCES "small_sections"("sectionId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Asset" ADD CONSTRAINT "Asset_UnitSection_Location" FOREIGN KEY ("assetLocation") REFERENCES "unit_sections"("unitId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Asset" ADD CONSTRAINT "Asset_MicroSection_Location" FOREIGN KEY ("assetLocation") REFERENCES "micro_sections"("sectionId") ON DELETE SET NULL ON UPDATE CASCADE;
