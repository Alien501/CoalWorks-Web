/*
  Warnings:

  - You are about to alter the column `locationLatitude` on the `mines` table. The data in that column could be lost. The data in that column will be cast from `Decimal(9,6)` to `Decimal(10,8)`.

*/
-- AlterTable
ALTER TABLE "mines" ALTER COLUMN "locationLatitude" SET DATA TYPE DECIMAL(10,8),
ALTER COLUMN "locationLongitude" SET DATA TYPE DECIMAL(11,8);
