-- CreateTable
CREATE TABLE `Image` (
    `imageID` VARCHAR(191) NOT NULL,
    `articleID` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`imageID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
