-- AlterTable
ALTER TABLE "UserExample" ADD COLUMN     "accessToken" TEXT,
ADD COLUMN     "provider" TEXT,
ALTER COLUMN "hashedPassword" SET DEFAULT E'',
ALTER COLUMN "salt" SET DEFAULT E'';
