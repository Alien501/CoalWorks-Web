/*
  Warnings:

  - You are about to drop the column `shiftShiftId` on the `ShiftTemplate` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ShiftTemplate" DROP CONSTRAINT "ShiftTemplate_shiftShiftId_fkey";

-- AlterTable
ALTER TABLE "ShiftTemplate" DROP COLUMN "shiftShiftId";

-- CreateTable
CREATE TABLE "_TemplateShifts" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_TemplateSupervisors" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_TemplateShifts_AB_unique" ON "_TemplateShifts"("A", "B");

-- CreateIndex
CREATE INDEX "_TemplateShifts_B_index" ON "_TemplateShifts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TemplateSupervisors_AB_unique" ON "_TemplateSupervisors"("A", "B");

-- CreateIndex
CREATE INDEX "_TemplateSupervisors_B_index" ON "_TemplateSupervisors"("B");

-- AddForeignKey
ALTER TABLE "_TemplateShifts" ADD CONSTRAINT "_TemplateShifts_A_fkey" FOREIGN KEY ("A") REFERENCES "Shift"("shiftId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TemplateShifts" ADD CONSTRAINT "_TemplateShifts_B_fkey" FOREIGN KEY ("B") REFERENCES "ShiftTemplate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TemplateSupervisors" ADD CONSTRAINT "_TemplateSupervisors_A_fkey" FOREIGN KEY ("A") REFERENCES "ShiftTemplate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TemplateSupervisors" ADD CONSTRAINT "_TemplateSupervisors_B_fkey" FOREIGN KEY ("B") REFERENCES "Supervisor"("id") ON DELETE CASCADE ON UPDATE CASCADE;
