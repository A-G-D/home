import { standard as standardCell } from '../ArticleCell/ArticleCell.mock'

// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  posts: [
    { ...standardCell().article, id: '42' },
    { ...standardCell().article, id: '43' },
    { ...standardCell().article, id: '44' },
  ],
})
