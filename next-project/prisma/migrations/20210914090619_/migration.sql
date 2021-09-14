/*
  Warnings:

  - You are about to drop the column `lang` on the `blog` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Images` ADD COLUMN `image360` VARCHAR(255) NOT NULL DEFAULT 'null',
    ADD COLUMN `type` VARCHAR(255) NOT NULL DEFAULT 'secondary',
    MODIFY `imageName` VARCHAR(255) NOT NULL,
    MODIFY `folderName` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `blog` DROP COLUMN `lang`;

-- CreateTable
CREATE TABLE `Lang` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `language` VARCHAR(191) NOT NULL,
    `blogId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Lang` ADD FOREIGN KEY (`blogId`) REFERENCES `blog`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
