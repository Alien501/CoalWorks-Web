/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `Shift` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Shift" ADD COLUMN     "userId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "Shift_userId_key" ON "Shift"("userId");

-- AddForeignKey
ALTER TABLE "Shift" ADD CONSTRAINT "Shift_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE SET NULL ON UPDATE CASCADE;
