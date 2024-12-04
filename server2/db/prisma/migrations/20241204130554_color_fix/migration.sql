/*
  Warnings:

  - You are about to drop the `SectionColor` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "SectionColor" DROP CONSTRAINT "SectionColor_sectionId_fkey";

-- AlterTable
ALTER TABLE "SectionType" ADD COLUMN     "color" TEXT NOT NULL DEFAULT '#fffff';

-- DropTable
DROP TABLE "SectionColor";
