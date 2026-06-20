/*
  Warnings:

  - You are about to drop the column `adress` on the `order` table. All the data in the column will be lost.
  - Added the required column `address` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cardName` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cardNumber` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cvc` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `expirationDate` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `order` DROP COLUMN `adress`,
    ADD COLUMN `address` VARCHAR(191) NOT NULL,
    ADD COLUMN `cardName` VARCHAR(191) NOT NULL,
    ADD COLUMN `cardNumber` VARCHAR(191) NOT NULL,
    ADD COLUMN `cvc` VARCHAR(191) NOT NULL,
    ADD COLUMN `expirationDate` VARCHAR(191) NOT NULL;
