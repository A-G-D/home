import { MetaTags } from '@redwoodjs/web'

import ArticleCell from 'src/components/ArticleCell'
import CommentsSection from 'src/components/CommentsSection'

const ArticlePage = ({ id }) => {
  return (
    <>
      <MetaTags title='Article' description='Article page' />

      <ArticleCell id={id} />
      <CommentsSection postId={id} />
    </>
  )
}

export default ArticlePage
