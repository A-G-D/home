import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const comments = () => {
  return db.comment.findMany()
}

export const comment = ({ id }: Prisma.CommentWhereUniqueInput) => {
  return db.comment.findUnique({
    where: { id },
  })
}

export const Comment = {
  post: (_obj, { root }: ResolverArgs<ReturnType<typeof comment>>) =>
    db.comment.findUnique({ where: { id: root.id } }).post(),
}

export const createComment = ({ input }) => {
  return db.comment.create({ data: input })
}

export const deleteComment = ({ id }) => {
  return db.comment.delete({ where: { id } })
}
