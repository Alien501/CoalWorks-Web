-- CreateTable
CREATE TABLE "_SectionUsers" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_SectionUsers_AB_unique" ON "_SectionUsers"("A", "B");

-- CreateIndex
CREATE INDEX "_SectionUsers_B_index" ON "_SectionUsers"("B");

-- AddForeignKey
ALTER TABLE "_SectionUsers" ADD CONSTRAINT "_SectionUsers_A_fkey" FOREIGN KEY ("A") REFERENCES "Section"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SectionUsers" ADD CONSTRAINT "_SectionUsers_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("userId") ON DELETE CASCADE ON UPDATE CASCADE;
