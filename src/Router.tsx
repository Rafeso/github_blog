import { Blog } from '@page/Blog'
import { Post } from '@page/Post'
import { Route } from 'react-router'
import { Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Blog />} />
        <Route path="/post/:id" element={<Post />} />
      </Route>
    </Routes>
  )
}
