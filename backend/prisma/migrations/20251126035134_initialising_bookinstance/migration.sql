/*
  Warnings:

  - You are about to drop the column `url` on the `Author` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `Book` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Author` DROP COLUMN `url`;

-- AlterTable
ALTER TABLE `Book` DROP COLUMN `url`;

-- CreateTable
CREATE TABLE `BookInstance` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `imprint` VARCHAR(191) NOT NULL,
    `status` ENUM('AVAILABLE', 'MAINTENANCE', 'LOANED', 'RESERVED') NOT NULL DEFAULT 'AVAILABLE',
    `dueBack` DATETIME(3) NULL,
    `bookId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `BookInstance` ADD CONSTRAINT `BookInstance_bookId_fkey` FOREIGN KEY (`bookId`) REFERENCES `Book`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
