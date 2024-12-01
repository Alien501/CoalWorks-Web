-- DropForeignKey
ALTER TABLE "large_sections" DROP CONSTRAINT "large_sections_typeId_fkey";

-- DropForeignKey
ALTER TABLE "medium_sections" DROP CONSTRAINT "medium_sections_insiderToId_fkey";

-- DropForeignKey
ALTER TABLE "medium_sections" DROP CONSTRAINT "medium_sections_typeId_fkey";

-- DropForeignKey
ALTER TABLE "micro_sections" DROP CONSTRAINT "micro_sections_insiderToId_fkey";

-- DropForeignKey
ALTER TABLE "micro_sections" DROP CONSTRAINT "micro_sections_typeId_fkey";

-- DropForeignKey
ALTER TABLE "small_sections" DROP CONSTRAINT "small_sections_insiderToId_fkey";

-- DropForeignKey
ALTER TABLE "small_sections" DROP CONSTRAINT "small_sections_typeId_fkey";

-- DropForeignKey
ALTER TABLE "unit_sections" DROP CONSTRAINT "unit_sections_insiderToId_fkey";

-- DropForeignKey
ALTER TABLE "unit_sections" DROP CONSTRAINT "unit_sections_typeId_fkey";

-- AlterTable
ALTER TABLE "large_sections" ALTER COLUMN "typeId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "medium_sections" ALTER COLUMN "typeId" DROP NOT NULL,
ALTER COLUMN "insiderToId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "micro_sections" ALTER COLUMN "typeId" DROP NOT NULL,
ALTER COLUMN "insiderToId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "small_sections" ALTER COLUMN "typeId" DROP NOT NULL,
ALTER COLUMN "insiderToId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "unit_sections" ALTER COLUMN "typeId" DROP NOT NULL,
ALTER COLUMN "insiderToId" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Shift" (
    "shiftId" SERIAL NOT NULL,
    "startTime" TIME(0) NOT NULL,
    "endTime" TIME(0) NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Shift_pkey" PRIMARY KEY ("shiftId")
);

-- AddForeignKey
ALTER TABLE "large_sections" ADD CONSTRAINT "large_sections_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "section_types"("typeId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medium_sections" ADD CONSTRAINT "medium_sections_insiderToId_fkey" FOREIGN KEY ("insiderToId") REFERENCES "large_sections"("sectionId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medium_sections" ADD CONSTRAINT "medium_sections_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "section_types"("typeId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "small_sections" ADD CONSTRAINT "small_sections_insiderToId_fkey" FOREIGN KEY ("insiderToId") REFERENCES "medium_sections"("sectionId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "small_sections" ADD CONSTRAINT "small_sections_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "section_types"("typeId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "micro_sections" ADD CONSTRAINT "micro_sections_insiderToId_fkey" FOREIGN KEY ("insiderToId") REFERENCES "small_sections"("sectionId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "micro_sections" ADD CONSTRAINT "micro_sections_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "section_types"("typeId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "unit_sections" ADD CONSTRAINT "unit_sections_insiderToId_fkey" FOREIGN KEY ("insiderToId") REFERENCES "micro_sections"("sectionId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "unit_sections" ADD CONSTRAINT "unit_sections_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "section_types"("typeId") ON DELETE SET NULL ON UPDATE CASCADE;
