/*
  Warnings:

  - Made the column `content` on table `blog` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `blog` MODIFY `content` TEXT NOT NULL;
