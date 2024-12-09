-- CreateEnum
CREATE TYPE "MailStatus" AS ENUM ('PENDING', 'QUEUED', 'PROCESSING', 'SENT', 'FAILED');

-- CreateEnum
CREATE TYPE "MailPriority" AS ENUM ('LOW', 'MEDIUM', 'HIGH');

-- CreateTable
CREATE TABLE "MailTask" (
    "id" TEXT NOT NULL,
    "recipients" TEXT[],
    "subject" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "attachments" JSONB,
    "scheduledFor" TIMESTAMP(3),
    "status" "MailStatus" NOT NULL DEFAULT 'PENDING',
    "priority" "MailPriority" NOT NULL DEFAULT 'MEDIUM',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MailTask_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MailLog" (
    "id" TEXT NOT NULL,
    "mailTaskId" TEXT NOT NULL,
    "recipient" TEXT NOT NULL,
    "status" "MailStatus" NOT NULL,
    "sentAt" TIMESTAMP(3),
    "errorMessage" TEXT,

    CONSTRAINT "MailLog_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MailLog" ADD CONSTRAINT "MailLog_mailTaskId_fkey" FOREIGN KEY ("mailTaskId") REFERENCES "MailTask"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
