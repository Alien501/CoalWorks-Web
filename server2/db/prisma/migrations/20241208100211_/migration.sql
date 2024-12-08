/*
  Warnings:

  - You are about to drop the column `userId` on the `Shift` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Shift" DROP CONSTRAINT "Shift_userId_fkey";

-- AlterTable
ALTER TABLE "Shift" DROP COLUMN "userId";

-- CreateTable
CREATE TABLE "ShiftUsers" (
    "shiftId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "ShiftUsers_pkey" PRIMARY KEY ("shiftId","userId")
);

-- CreateIndex
CREATE UNIQUE INDEX "ShiftUsers_shiftId_userId_key" ON "ShiftUsers"("shiftId", "userId");

-- AddForeignKey
ALTER TABLE "ShiftUsers" ADD CONSTRAINT "ShiftUsers_shiftId_fkey" FOREIGN KEY ("shiftId") REFERENCES "Shift"("shiftId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShiftUsers" ADD CONSTRAINT "ShiftUsers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE CASCADE ON UPDATE CASCADE;
