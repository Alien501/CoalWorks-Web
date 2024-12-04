-- CreateTable
CREATE TABLE "SectionColor" (
    "id" SERIAL NOT NULL,
    "hex" TEXT NOT NULL,
    "sectionId" INTEGER NOT NULL,

    CONSTRAINT "SectionColor_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SectionColor" ADD CONSTRAINT "SectionColor_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "SectionType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
