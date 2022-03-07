// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'
import PostsLayout from 'src/layouts/PostsLayout'
import HomeLayout from 'src/layouts/HomeLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={PostsLayout}>
        <Route path='/posts/new' page={PostNewPostPage} name='newPost' />
        <Route path='/posts/{id:String}/edit' page={PostEditPostPage} name='editPost' />
        <Route path='/posts/{id:String}' page={PostPostPage} name='post' />
        <Route path='/posts' page={PostPostsPage} name='posts' />
      </Set>
      <Set wrap={HomeLayout}>
        <Route path='/' page={HomePage} name='home' />
        <Route path='/blog' page={BlogPage} name='blog' />
        <Route path='/article/{id:String}' page={ArticlePage} name='article' />
        <Route path='/projects' page={ProjectsPage} name='projects' />
      </Set>
      <Route path='/resume' page={ResumePage} name='resume' />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
