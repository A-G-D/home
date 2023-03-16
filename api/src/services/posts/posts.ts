import type { Prisma } from '@prisma/client'

import { db } from 'src/lib/db'

export const posts = () => {
  return db.post.findMany()
}

export const post = ({ id }: Prisma.PostWhereUniqueInput) => {
  return db.post.findUnique({
    where: { id },
  })
}

export const createPost = ({ data }: Prisma.PostCreateArgs) => {
  return db.post.create({
    data,
  })
}

export const updatePost = ({ data, where: { id } }: Prisma.PostUpdateArgs) => {
  return db.post.update({
    data,
    where: { id },
  })
}

export const deletePost = ({ where: { id } }: Prisma.PostDeleteArgs) => {
  return db.post.delete({
    where: { id },
  })
}
