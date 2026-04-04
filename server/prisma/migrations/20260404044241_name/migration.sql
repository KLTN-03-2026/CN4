/*
  Warnings:

  - You are about to drop the column `location` on the `Candidate` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `Job` table. All the data in the column will be lost.
  - Added the required column `city_id` to the `Candidate` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Candidate" DROP COLUMN "location",
ADD COLUMN     "city_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Company" DROP COLUMN "location",
ADD COLUMN     "city_id" INTEGER;

-- AlterTable
ALTER TABLE "Job" DROP COLUMN "location";

-- CreateTable
CREATE TABLE "City" (
    "city_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "City_pkey" PRIMARY KEY ("city_id")
);

-- AddForeignKey
ALTER TABLE "Company" ADD CONSTRAINT "Company_city_id_fkey" FOREIGN KEY ("city_id") REFERENCES "City"("city_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Candidate" ADD CONSTRAINT "Candidate_city_id_fkey" FOREIGN KEY ("city_id") REFERENCES "City"("city_id") ON DELETE RESTRICT ON UPDATE CASCADE;
