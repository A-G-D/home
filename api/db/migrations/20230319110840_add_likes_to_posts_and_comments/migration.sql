-- AlterTable
ALTER TABLE "Comment" ADD COLUMN     "likes" INTEGER DEFAULT 0;

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "likes" INTEGER DEFAULT 0;
