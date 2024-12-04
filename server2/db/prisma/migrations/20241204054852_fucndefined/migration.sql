/*
  Warnings:

  - You are about to alter the column `locationLatitude` on the `mines` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,8)` to `DoublePrecision`.
  - You are about to alter the column `locationLongitude` on the `mines` table. The data in that column could be lost. The data in that column will be cast from `Decimal(11,8)` to `DoublePrecision`.

*/
-- AlterTable
ALTER TABLE "mines" ALTER COLUMN "locationLatitude" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "locationLongitude" SET DATA TYPE DOUBLE PRECISION;
