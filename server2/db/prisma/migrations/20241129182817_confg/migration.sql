-- CreateTable
CREATE TABLE "section_items" (
    "itemId" SERIAL NOT NULL,
    "typeId" INTEGER NOT NULL,
    "itemName" VARCHAR(255) NOT NULL,

    CONSTRAINT "section_items_pkey" PRIMARY KEY ("itemId")
);

-- AddForeignKey
ALTER TABLE "section_items" ADD CONSTRAINT "section_items_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "section_types"("typeId") ON DELETE RESTRICT ON UPDATE CASCADE;
