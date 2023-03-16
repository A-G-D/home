import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'
import { requireAuth } from 'src/lib/auth'

import { db } from 'src/lib/db'

export const comments = ({ postId }) => {
  return db.comment.findMany({ where: { postId } })
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

export const createComment = ({ data }: Prisma.CommentCreateArgs) => {
  return db.comment.create({
    data,
  })
}

export const updateComment = ({
  data,
  where: { id },
}: Prisma.CommentUpdateArgs) => {
  requireAuth({ roles: ['admin', 'moderator', 'owner'] })
  return db.comment.update({
    data,
    where: { id },
  })
}

export const deleteComment = ({ where: { id } }: Prisma.CommentDeleteArgs) => {
  requireAuth({ roles: ['admin', 'moderator'] })
  return db.comment.delete({
    where: { id },
  })
}
