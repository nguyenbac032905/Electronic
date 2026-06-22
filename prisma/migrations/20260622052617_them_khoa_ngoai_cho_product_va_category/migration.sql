/*
  Warnings:

  - You are about to drop the column `category` on the `product` table. All the data in the column will be lost.
  - Added the required column `categoryID` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `product` DROP COLUMN `category`,
    ADD COLUMN `categoryID` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_categoryID_fkey` FOREIGN KEY (`categoryID`) REFERENCES `Category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
