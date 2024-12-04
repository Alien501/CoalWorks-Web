-- CreateTable
CREATE TABLE "InitStatus" (
    "id" SERIAL NOT NULL,
    "isInit" BOOLEAN NOT NULL DEFAULT false,
    "initData" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "InitStatus_pkey" PRIMARY KEY ("id")
);
