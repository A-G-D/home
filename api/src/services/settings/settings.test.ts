import type { Setting } from '@prisma/client'

import { settings, setting, updateSetting } from './settings'
import type { StandardScenario } from './settings.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('settings', () => {
  scenario('returns all settings', async (scenario: StandardScenario) => {
    const result = await settings()

    expect(result.length).toEqual(Object.keys(scenario.setting).length)
  })

  scenario('returns a single setting', async (scenario: StandardScenario) => {
    const result = await setting({ id: scenario.setting.one.id })

    expect(result).toEqual(scenario.setting.one)
  })

  scenario('updates settings', async (scenario: StandardScenario) => {
    const original = (await updateSetting({
      id: scenario.setting.one.id,
      input: { status: scenario.setting.one.status + 1 },
    })) as Setting
    const result = await setting({ id: original.id })

    expect(result).toEqual(null)
  })
})
