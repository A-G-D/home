import { standard as standardCell } from 'src/components/ArticleCell/ArticleCell.mock'

const standardArticle = standardCell().article

export const standard = (/* vars, { ctx, req } */) => ({
  posts: [
    { ...standardArticle, id: '42', title: standardArticle.title + ' (1)' },
    { ...standardArticle, id: '43', title: standardArticle.title + ' (2)' },
    { ...standardArticle, id: '44', title: standardArticle.title + ' (3)' },
  ],
})
