-- CreateTable
CREATE TABLE "ShiftSchedule" (
    "id" SERIAL NOT NULL,
    "supervisorId" INTEGER NOT NULL,
    "workerId" INTEGER NOT NULL,
    "shiftId" INTEGER NOT NULL,
    "shiftTemplateId" INTEGER NOT NULL,
    "nextShiftId" INTEGER,
    "shiftShiftId" INTEGER,

    CONSTRAINT "ShiftSchedule_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ShiftSchedule" ADD CONSTRAINT "ShiftSchedule_supervisorId_fkey" FOREIGN KEY ("supervisorId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShiftSchedule" ADD CONSTRAINT "ShiftSchedule_workerId_fkey" FOREIGN KEY ("workerId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShiftSchedule" ADD CONSTRAINT "ShiftSchedule_shiftId_fkey" FOREIGN KEY ("shiftId") REFERENCES "Shift"("shiftId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShiftSchedule" ADD CONSTRAINT "ShiftSchedule_shiftTemplateId_fkey" FOREIGN KEY ("shiftTemplateId") REFERENCES "ShiftTemplate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShiftSchedule" ADD CONSTRAINT "ShiftSchedule_nextShiftId_fkey" FOREIGN KEY ("nextShiftId") REFERENCES "Shift"("shiftId") ON DELETE SET NULL ON UPDATE CASCADE;
