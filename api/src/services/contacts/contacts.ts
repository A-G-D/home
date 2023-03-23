import type { Prisma } from '@prisma/client'
import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

const validate = (data: Prisma.ContactCreateArgs['data']) => {}

export const contacts: QueryResolvers['contacts'] = ({
  email,
}: {
  email?: string
}) => {
  return db.contact.findMany(
    email
      ? {
          where: { email },
        }
      : undefined
  )
}

export const createContact: MutationResolvers['createContact'] = ({
  input: data,
}) => {
  validate(data)
  return db.contact.create({
    data,
  })
}

export const deleteContact: MutationResolvers['deleteContact'] = ({ id }) => {
  requireAuth({ roles: ['admin', 'moderator'] })
  return db.contact.delete({
    where: { id },
  })
}
