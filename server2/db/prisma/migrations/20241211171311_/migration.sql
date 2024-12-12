/*
  Warnings:

  - You are about to drop the column `shiftId` on the `ShiftTemplate` table. All the data in the column will be lost.
  - Added the required column `roleId` to the `ShiftTemplate` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ShiftTemplate" DROP CONSTRAINT "ShiftTemplate_shiftId_fkey";

-- AlterTable
ALTER TABLE "ShiftTemplate" DROP COLUMN "shiftId",
ADD COLUMN     "roleId" INTEGER NOT NULL,
ADD COLUMN     "shiftShiftId" INTEGER;

-- AddForeignKey
ALTER TABLE "ShiftTemplate" ADD CONSTRAINT "ShiftTemplate_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("roleId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShiftTemplate" ADD CONSTRAINT "ShiftTemplate_shiftShiftId_fkey" FOREIGN KEY ("shiftShiftId") REFERENCES "Shift"("shiftId") ON DELETE SET NULL ON UPDATE CASCADE;
