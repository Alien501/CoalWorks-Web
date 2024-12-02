-- CreateTable
CREATE TABLE "Plan" (
    "planId" SERIAL NOT NULL,
    "planName" TEXT NOT NULL,
    "planDescription" TEXT,
    "workArea" TEXT,
    "notes" TEXT,

    CONSTRAINT "Plan_pkey" PRIMARY KEY ("planId")
);

-- CreateTable
CREATE TABLE "Planfiles" (
    "fileId" SERIAL NOT NULL,
    "fileName" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "planId" INTEGER NOT NULL,

    CONSTRAINT "Planfiles_pkey" PRIMARY KEY ("fileId")
);

-- AddForeignKey
ALTER TABLE "Planfiles" ADD CONSTRAINT "Planfiles_planId_fkey" FOREIGN KEY ("planId") REFERENCES "Plan"("planId") ON DELETE RESTRICT ON UPDATE CASCADE;
