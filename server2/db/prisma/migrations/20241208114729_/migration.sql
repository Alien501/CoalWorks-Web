-- CreateEnum
CREATE TYPE "ResponseType" AS ENUM ('TEXT', 'IMAGE', 'VIDEO', 'AUDIO', 'DOCUMENT', 'LOCATION', 'MULTIPLE_CHOICE');

-- CreateEnum
CREATE TYPE "PlanStatus" AS ENUM ('Draft', 'Unpublished', 'Published');

-- CreateEnum
CREATE TYPE "RiskProps" AS ENUM ('Consequence', 'Probability', 'Exposure');

-- CreateTable
CREATE TABLE "InitStatus" (
    "id" SERIAL NOT NULL,
    "isInit" BOOLEAN NOT NULL DEFAULT false,
    "initData" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "InitStatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SuperAdmin" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "passwordHash" VARCHAR(255) NOT NULL,
    "salt" VARCHAR(255) NOT NULL,

    CONSTRAINT "SuperAdmin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mines" (
    "mineId" SERIAL NOT NULL,
    "mineName" VARCHAR(100) NOT NULL,
    "locationLatitude" DOUBLE PRECISION NOT NULL,
    "locationLongitude" DOUBLE PRECISION NOT NULL,
    "address" VARCHAR(255) NOT NULL,
    "ownerId" INTEGER,
    "mineType" VARCHAR(50) NOT NULL,
    "productionCapacity" DECIMAL(10,2) NOT NULL,
    "operationalStatus" BOOLEAN NOT NULL,
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
CREATE TABLE "Position" (
    "positionId" SERIAL NOT NULL,
    "positionName" VARCHAR(100) NOT NULL,
    "description" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "responsibilities" JSONB NOT NULL,

    CONSTRAINT "Position_pkey" PRIMARY KEY ("positionId")
);

-- CreateTable
CREATE TABLE "Role" (
    "roleId" SERIAL NOT NULL,
    "roleName" VARCHAR(100) NOT NULL,
    "description" TEXT,
    "permissions" JSONB,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("roleId")
);

-- CreateTable
CREATE TABLE "Permission" (
    "permissionId" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "category" VARCHAR(50) NOT NULL,
    "description" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Permission_pkey" PRIMARY KEY ("permissionId")
);

-- CreateTable
CREATE TABLE "User" (
    "userId" SERIAL NOT NULL,
    "username" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "phone" VARCHAR(20),
    "passwordHash" VARCHAR(255) NOT NULL,
    "salt" VARCHAR(255) NOT NULL,
    "userRoleId" INTEGER NOT NULL,
    "positionId" INTEGER,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "profileImage" VARCHAR(255),
    "lastLogin" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdBy" INTEGER,
    "isSupervisor" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "ShiftAssignment" (
    "id" SERIAL NOT NULL,
    "sectionId" INTEGER NOT NULL,
    "shiftId" INTEGER NOT NULL,
    "supervisorId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ShiftAssignment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShiftAssignmentOperator" (
    "id" SERIAL NOT NULL,
    "shiftAssignmentId" INTEGER NOT NULL,
    "operatorId" INTEGER NOT NULL,

    CONSTRAINT "ShiftAssignmentOperator_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Section" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "sectionType" INTEGER NOT NULL,
    "area" INTEGER,

    CONSTRAINT "Section_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Supervisor" (
    "id" SERIAL NOT NULL,
    "sectionId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Supervisor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SectionUsers" (
    "sectionId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "SectionUsers_pkey" PRIMARY KEY ("sectionId","userId")
);

-- CreateTable
CREATE TABLE "Shift" (
    "shiftId" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "startTime" TEXT NOT NULL,
    "endTime" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Shift_pkey" PRIMARY KEY ("shiftId")
);

-- CreateTable
CREATE TABLE "ShiftTemplate" (
    "id" SERIAL NOT NULL,
    "shiftId" INTEGER NOT NULL,
    "sectionId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ShiftTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShiftTemplateQuestion" (
    "id" SERIAL NOT NULL,
    "templateId" INTEGER NOT NULL,
    "question" TEXT NOT NULL,
    "responseType" "ResponseType" NOT NULL,
    "multipleChoiceOptions" TEXT[],

    CONSTRAINT "ShiftTemplateQuestion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShiftUsers" (
    "shiftId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "ShiftUsers_pkey" PRIMARY KEY ("shiftId","userId")
);

-- CreateTable
CREATE TABLE "Plan" (
    "planId" SERIAL NOT NULL,
    "planName" TEXT NOT NULL,
    "planDescription" TEXT,
    "form" JSONB NOT NULL,
    "status" "PlanStatus" NOT NULL DEFAULT 'Draft',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "notes" TEXT,

    CONSTRAINT "Plan_pkey" PRIMARY KEY ("planId")
);

-- CreateTable
CREATE TABLE "PlanAssets" (
    "id" SERIAL NOT NULL,
    "planId" INTEGER NOT NULL,
    "assetId" INTEGER NOT NULL,
    "assetName" TEXT NOT NULL,

    CONSTRAINT "PlanAssets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Planfiles" (
    "fileId" SERIAL NOT NULL,
    "fileName" TEXT NOT NULL,
    "filePath" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "planId" INTEGER NOT NULL,

    CONSTRAINT "Planfiles_pkey" PRIMARY KEY ("fileId")
);

-- CreateTable
CREATE TABLE "ActivePlans" (
    "id" SERIAL NOT NULL,
    "planName" TEXT NOT NULL,
    "planId" INTEGER NOT NULL,
    "sectionId" INTEGER NOT NULL,
    "userId" INTEGER,

    CONSTRAINT "ActivePlans_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SectionType" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "color" TEXT NOT NULL DEFAULT '#fffff',

    CONSTRAINT "SectionType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Coordinate" (
    "id" SERIAL NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "sectionId" INTEGER NOT NULL,

    CONSTRAINT "Coordinate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AssetType" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,

    CONSTRAINT "AssetType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Asset" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "assetType" INTEGER NOT NULL,
    "assetSection" INTEGER NOT NULL,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,

    CONSTRAINT "Asset_pkey" PRIMARY KEY ("id")
);

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

-- CreateIndex
CREATE UNIQUE INDEX "Role_roleName_key" ON "Role"("roleName");

-- CreateIndex
CREATE UNIQUE INDEX "Permission_name_key" ON "Permission"("name");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "ShiftAssignmentOperator_shiftAssignmentId_operatorId_key" ON "ShiftAssignmentOperator"("shiftAssignmentId", "operatorId");

-- CreateIndex
CREATE UNIQUE INDEX "Supervisor_userId_key" ON "Supervisor"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "ShiftUsers_shiftId_userId_key" ON "ShiftUsers"("shiftId", "userId");

-- AddForeignKey
ALTER TABLE "mines" ADD CONSTRAINT "mines_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "owners"("ownerId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_userRoleId_fkey" FOREIGN KEY ("userRoleId") REFERENCES "Role"("roleId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_positionId_fkey" FOREIGN KEY ("positionId") REFERENCES "Position"("positionId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShiftAssignment" ADD CONSTRAINT "ShiftAssignment_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "Section"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShiftAssignment" ADD CONSTRAINT "ShiftAssignment_shiftId_fkey" FOREIGN KEY ("shiftId") REFERENCES "Shift"("shiftId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShiftAssignment" ADD CONSTRAINT "ShiftAssignment_supervisorId_fkey" FOREIGN KEY ("supervisorId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShiftAssignmentOperator" ADD CONSTRAINT "ShiftAssignmentOperator_shiftAssignmentId_fkey" FOREIGN KEY ("shiftAssignmentId") REFERENCES "ShiftAssignment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShiftAssignmentOperator" ADD CONSTRAINT "ShiftAssignmentOperator_operatorId_fkey" FOREIGN KEY ("operatorId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Section" ADD CONSTRAINT "Section_sectionType_fkey" FOREIGN KEY ("sectionType") REFERENCES "SectionType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Supervisor" ADD CONSTRAINT "Supervisor_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "Section"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Supervisor" ADD CONSTRAINT "Supervisor_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SectionUsers" ADD CONSTRAINT "SectionUsers_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "Section"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SectionUsers" ADD CONSTRAINT "SectionUsers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShiftTemplate" ADD CONSTRAINT "ShiftTemplate_shiftId_fkey" FOREIGN KEY ("shiftId") REFERENCES "Shift"("shiftId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShiftTemplate" ADD CONSTRAINT "ShiftTemplate_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "Section"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShiftTemplateQuestion" ADD CONSTRAINT "ShiftTemplateQuestion_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "ShiftTemplate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShiftUsers" ADD CONSTRAINT "ShiftUsers_shiftId_fkey" FOREIGN KEY ("shiftId") REFERENCES "Shift"("shiftId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShiftUsers" ADD CONSTRAINT "ShiftUsers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlanAssets" ADD CONSTRAINT "PlanAssets_planId_fkey" FOREIGN KEY ("planId") REFERENCES "Plan"("planId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlanAssets" ADD CONSTRAINT "PlanAssets_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "Asset"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Planfiles" ADD CONSTRAINT "Planfiles_planId_fkey" FOREIGN KEY ("planId") REFERENCES "Plan"("planId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActivePlans" ADD CONSTRAINT "ActivePlans_planId_fkey" FOREIGN KEY ("planId") REFERENCES "Plan"("planId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActivePlans" ADD CONSTRAINT "ActivePlans_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "Section"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActivePlans" ADD CONSTRAINT "ActivePlans_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Coordinate" ADD CONSTRAINT "Coordinate_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "Section"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Asset" ADD CONSTRAINT "Asset_assetType_fkey" FOREIGN KEY ("assetType") REFERENCES "AssetType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Asset" ADD CONSTRAINT "Asset_assetSection_fkey" FOREIGN KEY ("assetSection") REFERENCES "Section"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RiskValues" ADD CONSTRAINT "RiskValues_matrixId_fkey" FOREIGN KEY ("matrixId") REFERENCES "RiskMatrix"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RiskAssesment" ADD CONSTRAINT "RiskAssesment_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "Section"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
