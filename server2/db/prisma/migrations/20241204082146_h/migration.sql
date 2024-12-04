/*
  Warnings:

  - Changed the type of `operationalStatus` on the `mines` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "mines" DROP COLUMN "operationalStatus",
ADD COLUMN     "operationalStatus" BOOLEAN NOT NULL;
