import { MetaTags } from '@redwoodjs/web'

import ArticleCell from 'src/components/ArticleCell'
import CommentsSection from 'src/components/CommentsSection'

const ArticlePage = ({ id }) => {
  return (
    <>
      <MetaTags title='Article' description='Article page' />

      <div className='flex flex-col items-stretch gap-24 px-6 py-12'>
        <ArticleCell id={id} />
        <CommentsSection postId={id} />
      </div>
    </>
  )
}

export default ArticlePage
