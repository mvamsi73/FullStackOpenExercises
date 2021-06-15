/* eslint-disable linebreak-style */
import React, { useState } from 'react'
import blogService from 'E:/FullStackOpen/PART-5/bloglist-frontend/src/services/blogs'
const handleDelete=(blog,blogs,setBlogs) => {
  if(window.confirm(`Remove blog ${blog.title} by ${blog.author}`)===true)
  {
    blogService.deleteblog(blog.id)
    setBlogs(blogs.filter(bloges => bloges.id !== blog.id))
  }
}
const Blog = ({ blog,setBlogs,blogs }) => {
  const [blogVisible,setBlogVisible]=useState(false)
  const hideWhenVisible = { display: blogVisible ? 'none' : '' }
  const showWhenVisible = { display: blogVisible ? '' : 'none' }
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }
  return(
    <li className='note'>
      <div style={blogStyle}>
        <div className="blogstart" style={hideWhenVisible}>{blog.title} {blog.author} <button onClick={() => setBlogVisible(true)}>show</button></div>
        <div  style={showWhenVisible}>{blog.title}<button onClick={() => setBlogVisible(false)}>hide</button></div>
        <div className="invisibleatfirst" style={showWhenVisible}>
          <div className="blogurl">{blog.url}</div>
          <div className="bloglikes">likes {blog.likes}<button onClick={() => blogService.update(blog.id,{ ...blog,likes:blog.likes+1 }).then(res => {setBlogs(blogs.map(bloges => bloges.id !== blog.id ? bloges : res))})}>like</button></div>
          <div className="blogcreator">{blog.author}</div>
          <button type="button" onClick={() => handleDelete(blog,blogs,setBlogs)}>remove</button>
        </div>
      </div>
    </li>
  )}

export default Blog