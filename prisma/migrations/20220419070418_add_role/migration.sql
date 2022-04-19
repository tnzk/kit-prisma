-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "Role",
ALTER COLUMN "createdAt" SET DATA TYPE TIMESTAMP(3);
