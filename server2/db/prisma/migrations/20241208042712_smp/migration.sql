-- CreateEnum
CREATE TYPE "RiskProps" AS ENUM ('Consequence', 'Probability', 'Exposure');

-- CreateTable
CREATE TABLE "RiskMatrix" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "col" INTEGER NOT NULL,
    "row" INTEGER NOT NULL,

    CONSTRAINT "RiskMatrix_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RiskValues" (
    "id" SERIAL NOT NULL,
    "type" "RiskProps" NOT NULL,
    "name" TEXT NOT NULL,
    "scale" INTEGER NOT NULL,
    "matrixId" INTEGER NOT NULL,

    CONSTRAINT "RiskValues_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RiskAssesment" (
    "id" SERIAL NOT NULL,
    "activity" TEXT NOT NULL,
    "sectionId" INTEGER NOT NULL,
    "hazard" TEXT NOT NULL,
    "Mechanism" TEXT NOT NULL,
    "exposedGroup" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "consequence" DOUBLE PRECISION NOT NULL,
    "exposure" DOUBLE PRECISION NOT NULL,
    "probability" DOUBLE PRECISION NOT NULL,
    "riskValue" DOUBLE PRECISION NOT NULL,
    "riskContolPlan" JSONB NOT NULL,

    CONSTRAINT "RiskAssesment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "RiskValues" ADD CONSTRAINT "RiskValues_matrixId_fkey" FOREIGN KEY ("matrixId") REFERENCES "RiskMatrix"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RiskAssesment" ADD CONSTRAINT "RiskAssesment_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "Section"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
