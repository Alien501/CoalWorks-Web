-- CreateTable
CREATE TABLE "hazardActivity" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "hazardActivity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hazardHazard" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "hazardHazard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hazardMechanism" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "hazardMechanism_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hazardExposedGroup" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "hazardExposedGroup_pkey" PRIMARY KEY ("id")
);
