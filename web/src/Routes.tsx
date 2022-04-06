// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Private, Router, Route, Set } from '@redwoodjs/router'
import { SiteStatus, useSettings } from 'src/constants/constants'
import PostsLayout from 'src/layouts/PostsLayout'
import HomeLayout from 'src/layouts/HomeLayout'

const Routes = () => {
  const statusRef = React.useRef<number>(useSettings().settings?.status)

  if (statusRef == null) return <></>

  const checkpointRedirect = { ...(statusRef.current !== SiteStatus.UP && { unauthenticated: 'checkpoint', private: true }) }

  return (
    <Router>
      <Route path='/login' page={LoginPage} name='login' />
      <Route path='/forgot-password' page={ForgotPasswordPage} name='forgotPassword' />
      <Route path='/reset-password' page={ResetPasswordPage} name='resetPassword' />
      <Set {...checkpointRedirect}>
        <Route path='/signup' page={SignupPage} name='signup' />
        <Private unauthenticated='login' roles='admin'>
          <Set wrap={PostsLayout}>
            <Route path='/admin/posts/new' page={PostNewPostPage} name='newPost' />
            <Route path='/admin/posts/{id:String}/edit' page={PostEditPostPage} name='editPost' />
            <Route path='/admin/posts/{id:String}' page={PostPostPage} name='post' />
            <Route path='/admin/posts' page={PostPostsPage} name='posts' />
          </Set>
        </Private>
        <Set wrap={HomeLayout}>
          <Route path='/' page={HomePage} name='home' />
          <Route path='/blog' page={BlogPage} name='blog' />
          <Route path='/blog/article/{id:String}' page={ArticlePage} name='article' />
          <Route path='/projects' page={ProjectsPage} name='projects' />
        </Set>
        <Route path='/resume' page={ResumePage} name='resume' />
      </Set>
      <Route path='/checkpoint' page={CheckpointPage} name='checkpoint' />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
