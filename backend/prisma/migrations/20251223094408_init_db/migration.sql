-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `fullName` VARCHAR(191) NOT NULL,
    `role` ENUM('ADMIN', 'STAFF') NOT NULL DEFAULT 'STAFF',
    `type` ENUM('FULL_TIME', 'PART_TIME') NOT NULL DEFAULT 'PART_TIME',
    `baseSalary` INTEGER NOT NULL DEFAULT 25000,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Shift` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `startTime` VARCHAR(191) NOT NULL,
    `endTime` VARCHAR(191) NOT NULL,
    `unitPrice` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EmployeeAvailability` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `shiftId` INTEGER NOT NULL,
    `date` DATE NOT NULL,

    UNIQUE INDEX `EmployeeAvailability_userId_shiftId_date_key`(`userId`, `shiftId`, `date`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `WorkSchedule` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `shiftId` INTEGER NOT NULL,
    `date` DATE NOT NULL,
    `isPublished` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ShiftSwapRequest` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `workScheduleId` INTEGER NOT NULL,
    `senderId` INTEGER NOT NULL,
    `receiverId` INTEGER NULL,
    `reason` VARCHAR(191) NULL,
    `status` ENUM('PENDING', 'ACCEPTED', 'APPROVED', 'REJECTED') NOT NULL DEFAULT 'PENDING',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Attendance` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `workScheduleId` INTEGER NOT NULL,
    `checkIn` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `checkOut` DATETIME(3) NULL,
    `status` VARCHAR(191) NULL,

    UNIQUE INDEX `Attendance_workScheduleId_key`(`workScheduleId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MonthlySalary` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `month` INTEGER NOT NULL,
    `year` INTEGER NOT NULL,
    `totalHours` DOUBLE NOT NULL DEFAULT 0,
    `totalSalary` INTEGER NOT NULL DEFAULT 0,
    `isPaid` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `MonthlySalary_userId_month_year_key`(`userId`, `month`, `year`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `EmployeeAvailability` ADD CONSTRAINT `EmployeeAvailability_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EmployeeAvailability` ADD CONSTRAINT `EmployeeAvailability_shiftId_fkey` FOREIGN KEY (`shiftId`) REFERENCES `Shift`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `WorkSchedule` ADD CONSTRAINT `WorkSchedule_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `WorkSchedule` ADD CONSTRAINT `WorkSchedule_shiftId_fkey` FOREIGN KEY (`shiftId`) REFERENCES `Shift`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ShiftSwapRequest` ADD CONSTRAINT `ShiftSwapRequest_workScheduleId_fkey` FOREIGN KEY (`workScheduleId`) REFERENCES `WorkSchedule`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ShiftSwapRequest` ADD CONSTRAINT `ShiftSwapRequest_senderId_fkey` FOREIGN KEY (`senderId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ShiftSwapRequest` ADD CONSTRAINT `ShiftSwapRequest_receiverId_fkey` FOREIGN KEY (`receiverId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Attendance` ADD CONSTRAINT `Attendance_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Attendance` ADD CONSTRAINT `Attendance_workScheduleId_fkey` FOREIGN KEY (`workScheduleId`) REFERENCES `WorkSchedule`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MonthlySalary` ADD CONSTRAINT `MonthlySalary_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
