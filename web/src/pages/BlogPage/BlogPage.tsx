import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import ArticlesCell from 'src/components/ArticlesCell'

const Body = () => {
  return (
    <main className='px-6 py-12'>
      <ArticlesCell />
    </main>
  )
}

const BlogPage = () => {
  return (
    <>
      <MetaTags title="AGD's Blog" description="AGD's Blog page" />
      <Body />
    </>
  )
}

export default BlogPage
