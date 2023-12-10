-- CreateTable
CREATE TABLE `Sell` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Customer_name` VARCHAR(255) NOT NULL,
    `Address` VARCHAR(255) NOT NULL,
    `Phone_Number` VARCHAR(255) NOT NULL,
    `Order` VARCHAR(100) NOT NULL,
    `Order_Quantity` INTEGER NOT NULL,

    UNIQUE INDEX `Sell_Customer_name_key`(`Customer_name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Contact_us` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Customer_name` VARCHAR(255) NOT NULL,
    `Email` VARCHAR(255) NOT NULL,
    `Phone_Number` VARCHAR(255) NOT NULL,
    `Subject` VARCHAR(100) NOT NULL,
    `Message` LONGTEXT NOT NULL,

    UNIQUE INDEX `Contact_us_Customer_name_key`(`Customer_name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
