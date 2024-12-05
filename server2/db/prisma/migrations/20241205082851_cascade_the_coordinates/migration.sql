-- DropForeignKey
ALTER TABLE "Coordinate" DROP CONSTRAINT "Coordinate_sectionId_fkey";

-- AddForeignKey
ALTER TABLE "Coordinate" ADD CONSTRAINT "Coordinate_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "Section"("id") ON DELETE CASCADE ON UPDATE CASCADE;
