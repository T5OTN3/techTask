-- AlterTable
ALTER TABLE `contact` MODIFY `contactDate` DATETIME(3) DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `smsCode` INTEGER,
    MODIFY `smsConfirmed` BOOLEAN,
    MODIFY `smsStatus` VARCHAR(255);
