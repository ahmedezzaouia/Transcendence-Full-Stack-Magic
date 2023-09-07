/*
  Warnings:

  - You are about to drop the column `istwofactorEnabled` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "istwofactorEnabled",
ADD COLUMN     "isTwofactorsEnabled" BOOLEAN NOT NULL DEFAULT false;
