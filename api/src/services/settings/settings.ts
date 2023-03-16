import type { Prisma } from '@prisma/client'
import { db } from 'src/lib/db'

export const settings = () => {
  return db.settings.findUnique({ where: { id: 1 } })
}

export const updateSettings = ({
  data,
  where: { id },
}: Prisma.SettingsUpdateArgs) => {
  return db.settings.update({
    data,
    where: { id },
  })
}
