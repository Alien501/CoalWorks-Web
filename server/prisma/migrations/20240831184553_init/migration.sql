/*
  Warnings:

  - You are about to drop the `Alert` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Incident` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Machinery` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Payroll` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Report` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Role` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SafetyCompliance` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SensorNode` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SensorWorker` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ShiftLog` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ShiftSchedule` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Task` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Alert" DROP CONSTRAINT "Alert_assigned_to_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."Incident" DROP CONSTRAINT "Incident_assigned_to_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."Incident" DROP CONSTRAINT "Incident_reported_by_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."Payroll" DROP CONSTRAINT "Payroll_shift_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."Payroll" DROP CONSTRAINT "Payroll_user_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."Report" DROP CONSTRAINT "Report_generated_by_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."SafetyCompliance" DROP CONSTRAINT "SafetyCompliance_machine_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."SafetyCompliance" DROP CONSTRAINT "SafetyCompliance_safety_supervisor_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."SensorWorker" DROP CONSTRAINT "SensorWorker_worker_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."ShiftLog" DROP CONSTRAINT "ShiftLog_worker_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."ShiftSchedule" DROP CONSTRAINT "ShiftSchedule_supervisor_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."Task" DROP CONSTRAINT "Task_assigned_to_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."Task" DROP CONSTRAINT "Task_shift_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."User" DROP CONSTRAINT "User_role_id_fkey";

-- DropTable
DROP TABLE "public"."Alert";

-- DropTable
DROP TABLE "public"."Incident";

-- DropTable
DROP TABLE "public"."Machinery";

-- DropTable
DROP TABLE "public"."Payroll";

-- DropTable
DROP TABLE "public"."Report";

-- DropTable
DROP TABLE "public"."Role";

-- DropTable
DROP TABLE "public"."SafetyCompliance";

-- DropTable
DROP TABLE "public"."SensorNode";

-- DropTable
DROP TABLE "public"."SensorWorker";

-- DropTable
DROP TABLE "public"."ShiftLog";

-- DropTable
DROP TABLE "public"."ShiftSchedule";

-- DropTable
DROP TABLE "public"."Task";

-- DropTable
DROP TABLE "public"."User";

-- CreateTable
CREATE TABLE "User" (
    "user_id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "email" TEXT,
    "contact_number" TEXT,
    "status" TEXT,
    "role_id" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Role" (
    "role_id" SERIAL NOT NULL,
    "role_name" TEXT NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("role_id")
);

-- CreateTable
CREATE TABLE "ShiftSchedule" (
    "shift_id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "start_time" TIMESTAMP(3) NOT NULL,
    "end_time" TIMESTAMP(3) NOT NULL,
    "supervisor_id" INTEGER NOT NULL,
    "status" TEXT,

    CONSTRAINT "ShiftSchedule_pkey" PRIMARY KEY ("shift_id")
);

-- CreateTable
CREATE TABLE "Task" (
    "task_id" SERIAL NOT NULL,
    "task_description" TEXT NOT NULL,
    "assigned_to_id" INTEGER NOT NULL,
    "shift_id" INTEGER NOT NULL,
    "status" TEXT,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("task_id")
);

-- CreateTable
CREATE TABLE "Incident" (
    "incident_id" SERIAL NOT NULL,
    "reported_by_id" INTEGER NOT NULL,
    "incident_type" TEXT NOT NULL,
    "description" TEXT,
    "date_reported" TIMESTAMP(3) NOT NULL,
    "status" TEXT,
    "assigned_to_id" INTEGER NOT NULL,

    CONSTRAINT "Incident_pkey" PRIMARY KEY ("incident_id")
);

-- CreateTable
CREATE TABLE "Alert" (
    "alert_id" SERIAL NOT NULL,
    "alert_type" TEXT NOT NULL,
    "priority" TEXT NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL,
    "assigned_to_id" INTEGER NOT NULL,
    "status" TEXT,

    CONSTRAINT "Alert_pkey" PRIMARY KEY ("alert_id")
);

-- CreateTable
CREATE TABLE "Machinery" (
    "machine_id" SERIAL NOT NULL,
    "machine_name" TEXT NOT NULL,
    "status" TEXT,
    "last_maintenance_date" TIMESTAMP(3),
    "location" TEXT,

    CONSTRAINT "Machinery_pkey" PRIMARY KEY ("machine_id")
);

-- CreateTable
CREATE TABLE "SafetyCompliance" (
    "compliance_id" SERIAL NOT NULL,
    "safety_supervisor_id" INTEGER NOT NULL,
    "machine_id" INTEGER NOT NULL,
    "compliance_status" TEXT NOT NULL,
    "date_checked" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SafetyCompliance_pkey" PRIMARY KEY ("compliance_id")
);

-- CreateTable
CREATE TABLE "Report" (
    "report_id" SERIAL NOT NULL,
    "report_type" TEXT NOT NULL,
    "generated_by_id" INTEGER NOT NULL,
    "date_generated" TIMESTAMP(3) NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "Report_pkey" PRIMARY KEY ("report_id")
);

-- CreateTable
CREATE TABLE "Payroll" (
    "payroll_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "shift_id" INTEGER NOT NULL,
    "hours_worked" DOUBLE PRECISION NOT NULL,
    "overtime_hours" DOUBLE PRECISION NOT NULL,
    "salary" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Payroll_pkey" PRIMARY KEY ("payroll_id")
);

-- CreateTable
CREATE TABLE "SensorNode" (
    "node_id" SERIAL NOT NULL,
    "p" DOUBLE PRECISION NOT NULL,
    "gas" DOUBLE PRECISION NOT NULL,
    "vibration" DOUBLE PRECISION NOT NULL,
    "temphum" DOUBLE PRECISION NOT NULL,
    "sound" DOUBLE PRECISION NOT NULL,
    "sos" TEXT NOT NULL,

    CONSTRAINT "SensorNode_pkey" PRIMARY KEY ("node_id")
);

-- CreateTable
CREATE TABLE "SensorWorker" (
    "worker_id" INTEGER NOT NULL,
    "p" DOUBLE PRECISION NOT NULL,
    "spo2" DOUBLE PRECISION NOT NULL,
    "falldetection" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "SensorWorker_pkey" PRIMARY KEY ("worker_id")
);

-- CreateTable
CREATE TABLE "ShiftLog" (
    "log_id" SERIAL NOT NULL,
    "worker_id" INTEGER NOT NULL,
    "log_details" TEXT NOT NULL,
    "issue_type" TEXT NOT NULL,
    "site" TEXT NOT NULL,

    CONSTRAINT "ShiftLog_pkey" PRIMARY KEY ("log_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Role_role_name_key" ON "Role"("role_name");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "Role"("role_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShiftSchedule" ADD CONSTRAINT "ShiftSchedule_supervisor_id_fkey" FOREIGN KEY ("supervisor_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_assigned_to_id_fkey" FOREIGN KEY ("assigned_to_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_shift_id_fkey" FOREIGN KEY ("shift_id") REFERENCES "ShiftSchedule"("shift_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Incident" ADD CONSTRAINT "Incident_reported_by_id_fkey" FOREIGN KEY ("reported_by_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Incident" ADD CONSTRAINT "Incident_assigned_to_id_fkey" FOREIGN KEY ("assigned_to_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Alert" ADD CONSTRAINT "Alert_assigned_to_id_fkey" FOREIGN KEY ("assigned_to_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SafetyCompliance" ADD CONSTRAINT "SafetyCompliance_safety_supervisor_id_fkey" FOREIGN KEY ("safety_supervisor_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SafetyCompliance" ADD CONSTRAINT "SafetyCompliance_machine_id_fkey" FOREIGN KEY ("machine_id") REFERENCES "Machinery"("machine_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Report" ADD CONSTRAINT "Report_generated_by_id_fkey" FOREIGN KEY ("generated_by_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payroll" ADD CONSTRAINT "Payroll_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payroll" ADD CONSTRAINT "Payroll_shift_id_fkey" FOREIGN KEY ("shift_id") REFERENCES "ShiftSchedule"("shift_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SensorWorker" ADD CONSTRAINT "SensorWorker_worker_id_fkey" FOREIGN KEY ("worker_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShiftLog" ADD CONSTRAINT "ShiftLog_worker_id_fkey" FOREIGN KEY ("worker_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
