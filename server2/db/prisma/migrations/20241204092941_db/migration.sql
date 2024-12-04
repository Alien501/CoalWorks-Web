-- DropForeignKey
ALTER TABLE "mines" DROP CONSTRAINT "mines_ownerId_fkey";

-- AlterTable
ALTER TABLE "mines" ALTER COLUMN "ownerId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "mines" ADD CONSTRAINT "mines_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "owners"("ownerId") ON DELETE SET NULL ON UPDATE CASCADE;
