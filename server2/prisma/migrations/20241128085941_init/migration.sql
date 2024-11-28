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

-- AddForeignKey
ALTER TABLE "mines" ADD CONSTRAINT "mines_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "owners"("ownerId") ON DELETE RESTRICT ON UPDATE CASCADE;
