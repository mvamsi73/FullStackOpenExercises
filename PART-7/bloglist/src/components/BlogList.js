import React from 'react'
import Blog from './Blog'
import { useSelector } from 'react-redux'

const BlogList = () => {
  const blogs = useSelector((state) => state.blog)
  const byLikes = (a1, a2) => a2.likes - a1.likes

  return blogs.sort(byLikes).map((blog) => <Blog key={blog.id} blog={blog} />)
}

export default BlogList
