/*
  Warnings:

  - You are about to drop the `UserShift` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Shift` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "UserShift" DROP CONSTRAINT "UserShift_shiftId_fkey";

-- DropForeignKey
ALTER TABLE "UserShift" DROP CONSTRAINT "UserShift_userId_fkey";

-- AlterTable
ALTER TABLE "Shift" ADD COLUMN     "userId" INTEGER;

-- DropTable
DROP TABLE "UserShift";

-- CreateIndex
CREATE UNIQUE INDEX "Shift_userId_key" ON "Shift"("userId");

-- AddForeignKey
ALTER TABLE "Shift" ADD CONSTRAINT "Shift_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE SET NULL ON UPDATE CASCADE;
