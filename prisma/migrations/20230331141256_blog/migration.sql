-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "isHeart" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isPinned" BOOLEAN NOT NULL DEFAULT false;