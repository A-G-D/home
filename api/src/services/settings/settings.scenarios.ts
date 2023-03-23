import type { Prisma, Setting } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.SettingCreateArgs>({
  setting: { one: { data: {} }, two: { data: {} } },
})

export type StandardScenario = ScenarioData<Setting, 'setting'>
