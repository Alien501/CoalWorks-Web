-- CreateTable
CREATE TABLE "SensorNode" (
    "node_id" SERIAL NOT NULL,
    "p" DOUBLE PRECISION NOT NULL,
    "gas" DOUBLE PRECISION NOT NULL,
    "vibration" DOUBLE PRECISION NOT NULL,
    "temphum" DOUBLE PRECISION NOT NULL,
    "sound" DOUBLE PRECISION NOT NULL,
    "sos" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SensorNode_pkey" PRIMARY KEY ("node_id")
);

-- CreateTable
CREATE TABLE "SensorWorker" (
    "worker_id" INTEGER NOT NULL,
    "p" DOUBLE PRECISION NOT NULL,
    "spo2" DOUBLE PRECISION NOT NULL,
    "falldetection" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SensorWorker_pkey" PRIMARY KEY ("worker_id")
);
