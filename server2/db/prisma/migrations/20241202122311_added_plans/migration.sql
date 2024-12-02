-- CreateTable
CREATE TABLE "ActivePlans" (
    "id" SERIAL NOT NULL,
    "planName" TEXT NOT NULL,
    "planId" INTEGER NOT NULL,
    "sectionId" INTEGER NOT NULL,

    CONSTRAINT "ActivePlans_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ActivePlans" ADD CONSTRAINT "ActivePlans_planId_fkey" FOREIGN KEY ("planId") REFERENCES "Plan"("planId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActivePlans" ADD CONSTRAINT "ActivePlans_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "Section"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
