-- CreateTable
CREATE TABLE "Payload" (
    "id" SERIAL NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "x_RMS" DOUBLE PRECISION NOT NULL,
    "y_RMS" DOUBLE PRECISION NOT NULL,
    "z_RMS" DOUBLE PRECISION NOT NULL,
    "x_position_change" DOUBLE PRECISION NOT NULL,
    "y_position_change" DOUBLE PRECISION NOT NULL,
    "z_position_change" DOUBLE PRECISION NOT NULL,
    "current_z_ste" DOUBLE PRECISION NOT NULL,
    "current_z_freq10" DOUBLE PRECISION NOT NULL,
    "rockfall_detected" BOOLEAN NOT NULL,

    CONSTRAINT "Payload_pkey" PRIMARY KEY ("id")
);
