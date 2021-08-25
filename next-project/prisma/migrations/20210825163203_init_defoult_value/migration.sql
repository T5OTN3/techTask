-- AlterTable
ALTER TABLE `contact` MODIFY `privacy` BOOLEAN DEFAULT false,
    MODIFY `acceptTerms` BOOLEAN DEFAULT false,
    MODIFY `smsConfirmed` BOOLEAN DEFAULT false;
