/*
  Warnings:

  - The primary key for the `Asset` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `assetDescription` on the `Asset` table. All the data in the column will be lost.
  - You are about to drop the column `assetId` on the `Asset` table. All the data in the column will be lost.
  - You are about to drop the column `assetLocation` on the `Asset` table. All the data in the column will be lost.
  - You are about to drop the column `assetModel` on the `Asset` table. All the data in the column will be lost.
  - You are about to drop the column `assetName` on the `Asset` table. All the data in the column will be lost.
  - You are about to drop the column `assetTypeId` on the `Asset` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Asset` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Asset` table. All the data in the column will be lost.
  - You are about to drop the `large_sections` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `medium_sections` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `micro_sections` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `section_items` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `section_types` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `small_sections` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `unit_sections` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `assetSection` to the `Asset` table without a default value. This is not possible if the table is not empty.
  - Added the required column `assetType` to the `Asset` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Asset` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Asset` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Asset" DROP CONSTRAINT "Asset_LargeSection_Location";

-- DropForeignKey
ALTER TABLE "Asset" DROP CONSTRAINT "Asset_MediumSection_Location";

-- DropForeignKey
ALTER TABLE "Asset" DROP CONSTRAINT "Asset_MicroSection_Location";

-- DropForeignKey
ALTER TABLE "Asset" DROP CONSTRAINT "Asset_SmallSection_Location";

-- DropForeignKey
ALTER TABLE "Asset" DROP CONSTRAINT "Asset_UnitSection_Location";

-- DropForeignKey
ALTER TABLE "Asset" DROP CONSTRAINT "Asset_assetTypeId_fkey";

-- DropForeignKey
ALTER TABLE "Plan" DROP CONSTRAINT "Plan_largeSection_fkey";

-- DropForeignKey
ALTER TABLE "Plan" DROP CONSTRAINT "Plan_mediumSection_fkey";

-- DropForeignKey
ALTER TABLE "Plan" DROP CONSTRAINT "Plan_microSection_fkey";

-- DropForeignKey
ALTER TABLE "Plan" DROP CONSTRAINT "Plan_smallSection_fkey";

-- DropForeignKey
ALTER TABLE "Plan" DROP CONSTRAINT "Plan_unitSection_fkey";

-- DropForeignKey
ALTER TABLE "large_sections" DROP CONSTRAINT "large_sections_insiderToId_fkey";

-- DropForeignKey
ALTER TABLE "large_sections" DROP CONSTRAINT "large_sections_typeId_fkey";

-- DropForeignKey
ALTER TABLE "medium_sections" DROP CONSTRAINT "medium_sections_insiderToId_fkey";

-- DropForeignKey
ALTER TABLE "medium_sections" DROP CONSTRAINT "medium_sections_typeId_fkey";

-- DropForeignKey
ALTER TABLE "micro_sections" DROP CONSTRAINT "micro_sections_insiderToId_fkey";

-- DropForeignKey
ALTER TABLE "micro_sections" DROP CONSTRAINT "micro_sections_typeId_fkey";

-- DropForeignKey
ALTER TABLE "section_items" DROP CONSTRAINT "section_items_typeId_fkey";

-- DropForeignKey
ALTER TABLE "small_sections" DROP CONSTRAINT "small_sections_insiderToId_fkey";

-- DropForeignKey
ALTER TABLE "small_sections" DROP CONSTRAINT "small_sections_typeId_fkey";

-- DropForeignKey
ALTER TABLE "unit_sections" DROP CONSTRAINT "unit_sections_insiderToId_fkey";

-- DropForeignKey
ALTER TABLE "unit_sections" DROP CONSTRAINT "unit_sections_typeId_fkey";

-- AlterTable
ALTER TABLE "Asset" DROP CONSTRAINT "Asset_pkey",
DROP COLUMN "assetDescription",
DROP COLUMN "assetId",
DROP COLUMN "assetLocation",
DROP COLUMN "assetModel",
DROP COLUMN "assetName",
DROP COLUMN "assetTypeId",
DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "assetSection" INTEGER NOT NULL,
ADD COLUMN     "assetType" INTEGER NOT NULL,
ADD COLUMN     "description" VARCHAR(255) NOT NULL,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "name" VARCHAR(255) NOT NULL,
ADD CONSTRAINT "Asset_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "large_sections";

-- DropTable
DROP TABLE "medium_sections";

-- DropTable
DROP TABLE "micro_sections";

-- DropTable
DROP TABLE "section_items";

-- DropTable
DROP TABLE "section_types";

-- DropTable
DROP TABLE "small_sections";

-- DropTable
DROP TABLE "unit_sections";

-- CreateTable
CREATE TABLE "SectionType" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,

    CONSTRAINT "SectionType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Section" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "sectionType" INTEGER NOT NULL,
    "area" INTEGER,

    CONSTRAINT "Section_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AssetType" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,

    CONSTRAINT "AssetType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Coordinate" (
    "id" SERIAL NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "sectionId" INTEGER NOT NULL,

    CONSTRAINT "Coordinate_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Section" ADD CONSTRAINT "Section_sectionType_fkey" FOREIGN KEY ("sectionType") REFERENCES "SectionType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Asset" ADD CONSTRAINT "Asset_assetType_fkey" FOREIGN KEY ("assetType") REFERENCES "AssetType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Asset" ADD CONSTRAINT "Asset_assetSection_fkey" FOREIGN KEY ("assetSection") REFERENCES "Section"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Coordinate" ADD CONSTRAINT "Coordinate_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "Section"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
