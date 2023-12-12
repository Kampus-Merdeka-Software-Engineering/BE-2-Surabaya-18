-- CreateTable
CREATE TABLE `menu` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Customer_name` VARCHAR(255) NOT NULL,
    `Address` VARCHAR(255) NOT NULL,
    `Phone_Number` VARCHAR(255) NOT NULL,
    `Order` VARCHAR(100) NOT NULL,
    `Order_Quantity` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
