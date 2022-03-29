import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.CommentCreateArgs>({
  comment: {
    tux: {
      data: {
        name: 'Tux',
        body: 'Hey, Moses.',
        post: { create: { title: 'Letter to Tux', body: 'Hey, Tux.' } },
      },
    },
    moses: {
      data: {
        name: 'Moses',
        body: 'Yo, Tux.',
        post: { create: { title: 'Letter to Moses', body: 'Yo, Moses' } },
      },
    },
  },
})

export const postOnly = defineScenario({
  post: {
    bark: {
      data: {
        title: 'Bark',
        body: "A tree's bark is worse than its bite",
      },
    },
  },
})

export type StandardScenario = typeof standard
