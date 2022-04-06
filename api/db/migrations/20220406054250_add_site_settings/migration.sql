-- CreateTable
CREATE TABLE "Settings" (
    "id" SERIAL NOT NULL,
    "status" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Settings_pkey" PRIMARY KEY ("id")
);
