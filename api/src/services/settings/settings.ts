import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

export const settings: QueryResolvers['settings'] = () => {
  return db.settings.findFirst()
}

export const updateSetting: MutationResolvers['updateSetting'] = ({
  id,
  input: data,
}) => {
  requireAuth({ roles: ['admin'] })
  return db.settings.update({
    data,
    where: { id },
  })
}
