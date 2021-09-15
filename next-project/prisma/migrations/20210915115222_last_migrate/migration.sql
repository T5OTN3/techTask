/*
  Warnings:

  - You are about to alter the column `image360` on the `Images` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `TinyInt`.

*/
-- AlterTable
ALTER TABLE `Images` MODIFY `image360` BOOLEAN NOT NULL DEFAULT false;
