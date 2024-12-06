/*
  Warnings:

  - Added the required column `userId` to the `ActivePlans` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ActivePlans" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "ActivePlans" ADD CONSTRAINT "ActivePlans_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
