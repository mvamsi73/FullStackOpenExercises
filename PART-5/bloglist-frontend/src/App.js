/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'
import LoginForm from './components/login_form'
import BlogForm from './components/blog_form'
import * as _ from 'lodash'
import PropTypes from 'prop-types'
const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [errormessage,setErrorMessage]=useState(null)
  const [notificationmsg,setNotificationmsg]=useState(null)
  const [title,setTitle]=useState('')
  const [author,setAuthor]=useState('')
  const [url,setUrl]=useState('')
  const [likes,setLikes]=useState('')
  const [loginVisible, setLoginVisible] = useState(false)
  const [blogVisible,setBlogVisible]=useState(false)
  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs(_.sortBy(blogs,'likes'))
    )
  }, [])
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  const handleLogin = async(event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username, password,
      })
      window.localStorage.setItem(
        'loggedappUser', JSON.stringify(user)
      )
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
      setErrorMessage('Wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }
  const Logout=() => {
    window.localStorage.removeItem('loggedappUser')
    setUser(null)
  }

  const loginForm = () => {
    const hideWhenVisible = { display: loginVisible ? 'none' : '' }
    const showWhenVisible = { display: loginVisible ? '' : 'none' }

    return (
      <div>
        <div style={hideWhenVisible}>
          <button onClick={() => setLoginVisible(true)}>log in</button>
        </div>
        <div style={showWhenVisible}>
          <LoginForm
            username={username}
            password={password}
            handleUsernameChange={({ target }) => setUsername(target.value)}
            handlePasswordChange={({ target }) => setPassword(target.value)}
            handleSubmit={handleLogin}
          />
          <button onClick={() => setLoginVisible(false)}>cancel</button>
        </div>
      </div>
    )
  }
  LoginForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleUsernameChange: PropTypes.func.isRequired,
    handlePasswordChange: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
  }

  const Addblog=(event) => {
    event.preventDefault()
    const obj={
      title:title,
      author:author,
      url:url,
      likes:likes,
      user:user.id
    }
    blogService.create(obj).then(response => {setBlogs(blogs.concat(response))})
    setNotificationmsg(`a new blog ${title} by ${author} added`)
    setTimeout(() => {
      setNotificationmsg(null)
    }, 5000)
    setTitle('')
    setAuthor('')
    setUrl('')
    setLikes('')
  }

  const blogForm = () => {
    const hideWhenVisible = { display: blogVisible ? 'none' : '' }
    const showWhenVisible = { display: blogVisible ? '' : 'none' }
    return (
      <div>
        <div style={hideWhenVisible}>
          <button onClick={() => setBlogVisible(true)}>add</button>
        </div>
        <div style={showWhenVisible}>
          <BlogForm
            Addblog={Addblog}
            title={title}
            handleTitleChange={({ target }) => setTitle(target.value)}
            author={author}
            handleAuthorChange={({ target }) => setAuthor(target.value)}
            url={url}
            handleUrlChange={({ target }) => setUrl(target.value)}
            likes={likes}
            handleLikesChange={({ target }) => setLikes(target.value)}
          />
          <button onClick={() => setBlogVisible(false)}>cancel</button>
        </div>
      </div>
    )
  }

  if(user===null)
  {
    return(
      <div>
        <h2>Login to Application</h2>
        {loginForm()}
        <h2><font color="red">{errormessage}</font></h2>
      </div>
    )
  }
  // setBlogs(_.sortBy(blogs,"likes"))
  return (

    <div>
      <h2>blogs</h2>
      <h2><font color="red">{errormessage}</font></h2>
      <h2><font color="green">{notificationmsg}</font></h2>
      <p>{user.name} logged in <button onClick={Logout}>logout</button></p>
      {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} setBlogs={setBlogs} blogs={blogs}/>
      )}
      {blogForm()}
    </div>
  )
}

export default App