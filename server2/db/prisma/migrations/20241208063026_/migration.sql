/*
  Warnings:

  - You are about to drop the `_SectionUsers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_SectionUsers" DROP CONSTRAINT "_SectionUsers_A_fkey";

-- DropForeignKey
ALTER TABLE "_SectionUsers" DROP CONSTRAINT "_SectionUsers_B_fkey";

-- DropTable
DROP TABLE "_SectionUsers";

-- CreateTable
CREATE TABLE "SectionUsers" (
    "sectionId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "SectionUsers_pkey" PRIMARY KEY ("sectionId","userId")
);

-- AddForeignKey
ALTER TABLE "SectionUsers" ADD CONSTRAINT "SectionUsers_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "Section"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SectionUsers" ADD CONSTRAINT "SectionUsers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE CASCADE ON UPDATE CASCADE;
