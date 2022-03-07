import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import ArticlesCell from 'src/components/ArticlesCell'

const Body = () => {
  return (
    <>
      <ArticlesCell />
    </>
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
