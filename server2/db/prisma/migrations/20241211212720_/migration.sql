/*
  Warnings:

  - You are about to drop the `_TemplateShifts` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[shiftId]` on the table `ShiftTemplate` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[shiftId]` on the table `Supervisor` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `shiftId` to the `Supervisor` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_TemplateShifts" DROP CONSTRAINT "_TemplateShifts_A_fkey";

-- DropForeignKey
ALTER TABLE "_TemplateShifts" DROP CONSTRAINT "_TemplateShifts_B_fkey";

-- AlterTable
ALTER TABLE "ShiftTemplate" ADD COLUMN     "shiftId" INTEGER;

-- AlterTable
ALTER TABLE "Supervisor" ADD COLUMN     "shiftId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "_TemplateShifts";

-- CreateIndex
CREATE UNIQUE INDEX "ShiftTemplate_shiftId_key" ON "ShiftTemplate"("shiftId");

-- CreateIndex
CREATE UNIQUE INDEX "Supervisor_shiftId_key" ON "Supervisor"("shiftId");

-- AddForeignKey
ALTER TABLE "Supervisor" ADD CONSTRAINT "Supervisor_shiftId_fkey" FOREIGN KEY ("shiftId") REFERENCES "Shift"("shiftId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShiftTemplate" ADD CONSTRAINT "ShiftTemplate_shiftId_fkey" FOREIGN KEY ("shiftId") REFERENCES "Shift"("shiftId") ON DELETE SET NULL ON UPDATE CASCADE;
