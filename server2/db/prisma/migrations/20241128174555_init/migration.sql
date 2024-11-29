-- CreateTable
CREATE TABLE "mines" (
    "mineId" SERIAL NOT NULL,
    "mineName" VARCHAR(100) NOT NULL,
    "locationLatitude" DECIMAL(9,6) NOT NULL,
    "locationLongitude" DECIMAL(9,6) NOT NULL,
    "address" VARCHAR(255) NOT NULL,
    "ownerId" INTEGER NOT NULL,
    "mineType" VARCHAR(50) NOT NULL,
    "productionCapacity" DECIMAL(10,2) NOT NULL,
    "operationalStatus" VARCHAR(50) NOT NULL,
    "startDate" DATE NOT NULL,
    "endDate" DATE,

    CONSTRAINT "mines_pkey" PRIMARY KEY ("mineId")
);

-- CreateTable
CREATE TABLE "owners" (
    "ownerId" SERIAL NOT NULL,
    "ownerName" VARCHAR(100) NOT NULL,
    "contactName" VARCHAR(100) NOT NULL,
    "contactEmail" VARCHAR(100) NOT NULL,
    "contactPhone" VARCHAR(15) NOT NULL,

    CONSTRAINT "owners_pkey" PRIMARY KEY ("ownerId")
);

-- CreateTable
CREATE TABLE "large_sections" (
    "sectionId" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "area" DECIMAL(10,2),
    "typeId" INTEGER NOT NULL,
    "insiderToId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "large_sections_pkey" PRIMARY KEY ("sectionId")
);

-- CreateTable
CREATE TABLE "medium_sections" (
    "sectionId" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "area" DECIMAL(10,2),
    "typeId" INTEGER NOT NULL,
    "insiderToId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "medium_sections_pkey" PRIMARY KEY ("sectionId")
);

-- CreateTable
CREATE TABLE "small_sections" (
    "sectionId" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "area" DECIMAL(10,2),
    "typeId" INTEGER NOT NULL,
    "insiderToId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "small_sections_pkey" PRIMARY KEY ("sectionId")
);

-- CreateTable
CREATE TABLE "micro_sections" (
    "sectionId" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "area" DECIMAL(10,2),
    "typeId" INTEGER NOT NULL,
    "insiderToId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "micro_sections_pkey" PRIMARY KEY ("sectionId")
);

-- CreateTable
CREATE TABLE "unit_sections" (
    "unitId" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "model" VARCHAR(255),
    "typeId" INTEGER NOT NULL,
    "insiderToId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "unit_sections_pkey" PRIMARY KEY ("unitId")
);

-- CreateTable
CREATE TABLE "section_types" (
    "typeId" SERIAL NOT NULL,
    "scaleLevel" INTEGER NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "section_types_pkey" PRIMARY KEY ("typeId")
);

-- CreateIndex
CREATE UNIQUE INDEX "section_types_scaleLevel_name_key" ON "section_types"("scaleLevel", "name");

-- AddForeignKey
ALTER TABLE "mines" ADD CONSTRAINT "mines_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "owners"("ownerId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "large_sections" ADD CONSTRAINT "large_sections_insiderToId_fkey" FOREIGN KEY ("insiderToId") REFERENCES "mines"("mineId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "large_sections" ADD CONSTRAINT "large_sections_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "section_types"("typeId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medium_sections" ADD CONSTRAINT "medium_sections_insiderToId_fkey" FOREIGN KEY ("insiderToId") REFERENCES "large_sections"("sectionId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medium_sections" ADD CONSTRAINT "medium_sections_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "section_types"("typeId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "small_sections" ADD CONSTRAINT "small_sections_insiderToId_fkey" FOREIGN KEY ("insiderToId") REFERENCES "medium_sections"("sectionId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "small_sections" ADD CONSTRAINT "small_sections_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "section_types"("typeId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "micro_sections" ADD CONSTRAINT "micro_sections_insiderToId_fkey" FOREIGN KEY ("insiderToId") REFERENCES "small_sections"("sectionId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "micro_sections" ADD CONSTRAINT "micro_sections_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "section_types"("typeId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "unit_sections" ADD CONSTRAINT "unit_sections_insiderToId_fkey" FOREIGN KEY ("insiderToId") REFERENCES "micro_sections"("sectionId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "unit_sections" ADD CONSTRAINT "unit_sections_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "section_types"("typeId") ON DELETE RESTRICT ON UPDATE CASCADE;
