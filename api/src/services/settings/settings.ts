import { db } from 'src/lib/db'

export const settings = () => {
  return db.settings.findUnique({ where: { id: 1 } })
}
