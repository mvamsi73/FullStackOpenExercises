const jwt = require('jsonwebtoken')
const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')

const getToken = (request) => {
	const authorization = request.get('authorization')
	if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7)
	}
	return null
}

blogsRouter.get('/', async(request, response) => {
  const bloges=await Blog.find({}).find({}).populate('user',{username:1,name:1})
  response.json(bloges)
})

blogsRouter.get('/:id', (request, response, next) => {
  Blog.findById(request.params.id)
    .then(blog => {
      if (blog) {
        response.json(blog)
      } else {
        response.status(404).end()
      }
    })
    .catch(error => next(error))
})

blogsRouter.post('/', async (request, response) => {
	const body = request.body
	const token = getToken(request)
	const decodedToken = jwt.verify(token, process.env.SECRET)
	if (!token || !decodedToken.id) {
		return response.status(401).json({
			error: 'token missing or invalid',
		})
	}

	const user = await User.findById(decodedToken.id)

	const blog = new Blog({
		title: body.title,
		author: body.author,
		url: body.url,
		likes: body.likes,
		user: user._id,
	})

	// const blog = new Blog(request.body)
	const savedBlog = await blog.save()
	user.bloges = user.bloges.concat(savedBlog._id)
	await user.save()
	response.json(savedBlog.toJSON())
})

blogsRouter.delete('/:id', async(request, response, next) => {
  const token = getToken(request)
  const decodedToken = jwt.verify(token, process.env.SECRET)
  if (!token || !decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }
  const blog=await Blog.findById(request.params.id)
  if(blog.user.toString()===decodedToken.id.toString())
  {
  try{
 await Blog.findByIdAndRemove(request.params.id)
    response.status(204).end()
  }
  catch(exception){
    next(exception)}
  }
  else
  {
    return response.status(401).json({ error: 'token missing or invalid' })
  }
})

blogsRouter.put('/:id', (request, response, next) => {
  const body = request.body

  const blog = {
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes
  }

  Blog.findByIdAndUpdate(request.params.id, blog, { new: true })
    .then(updatedBlog => {
      response.json(updatedBlog)
    })
    .catch(error => next(error))
})

module.exports = blogsRouter