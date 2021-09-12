-- CreateTable
CREATE TABLE `admin` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `role` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `contact` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(255) NOT NULL,
    `lastName` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(255) NOT NULL,
    `subject` VARCHAR(255) NOT NULL,
    `message` VARCHAR(255) NOT NULL,
    `privacy` BOOLEAN DEFAULT false,
    `acceptTerms` BOOLEAN DEFAULT false,
    `contactDate` DATETIME(3) DEFAULT CURRENT_TIMESTAMP(3),
    `smsCode` INTEGER,
    `smsConfirmed` BOOLEAN DEFAULT false,
    `smsStatus` VARCHAR(255),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `blog` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `lang` VARCHAR(255) NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `shortText` TEXT NOT NULL,
    `blogText` TEXT NOT NULL,
    `metaDescription` VARCHAR(255) NOT NULL,
    `metaKeywords` VARCHAR(255) NOT NULL,
    `createDate` DATETIME(3) DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Images` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `imageName` VARCHAR(191) NOT NULL,
    `folderName` VARCHAR(191) NOT NULL,
    `blogId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Images` ADD FOREIGN KEY (`blogId`) REFERENCES `blog`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
