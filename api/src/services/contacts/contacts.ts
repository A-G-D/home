import type { Prisma } from '@prisma/client'
import { requireAuth } from 'src/lib/auth'
import { db } from 'src/lib/db'

const validate = (data: Prisma.ContactCreateArgs['data']) => {}

export const contacts = () => {
  return db.contact.findMany()
}

export const createContact = ({ data }: Prisma.ContactCreateArgs) => {
  validate(data)
  return db.contact.create({
    data,
  })
}

export const deleteContract = ({ where: { id } }: Prisma.ContactDeleteArgs) => {
  requireAuth({ roles: ['admin', 'moderator'] })
  return db.contact.delete({
    where: { id },
  })
}
