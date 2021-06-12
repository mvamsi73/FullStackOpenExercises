const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

test('bloges are returned as json', async () => {
    jest.setTimeout(100000);
  await api
    .get('/api/bloges')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

afterAll(() => {
  mongoose.connection.close()
})
test('a valid blog can be added', async () => {
    const newBlog = {
        title: "Family Man 2",
        author: "FM",
        url: "Amazon Prime",
        likes: 2000
    }
    const initialBloges = await api.get('/api/bloges')
    await api
      .post('/api/bloges')
      .send(newBlog)
      .expect(200)
      .expect('Content-Type', /application\/json/)
  
    const response = await api.get('/api/bloges')
  
    const contents = response.body.map(r => r.title)
  
    expect(response.body).toHaveLength(initialBloges.body.length + 1)
    expect(contents).toContain(
      'Family Man 2'
    )
  })
  
  test('unique identifier property of the blog posts is named id',async ()=>{
      const response=await api.get('/api/bloges')
      expect(response.body[0].id).toBeDefined()
  })
  test('default like property is zero',async () =>{
    const newBlog = {
        title: "Family Man 3",
        author: "FM",
        url: "Amazon Prime"
        }
       const blog= await api
      .post('/api/bloges')
      .send(newBlog)
      .expect(200)
      .expect('Content-Type', /application\/json/)
      expect(blog.body.likes).toBe(0)
  })
  test('blog without title and url is not added', async () => {
    const newBlog = {
        author:"MV",
        likes: 2000
    }
    const initialBloges = await api.get('/api/bloges')
    await api
      .post('/api/bloges')
      .send(newBlog)
      .expect(400)
  
    const response = await api.get('/api/bloges')
    console.log(response.body)
    expect(response.body.length).toBe(initialBloges.body.length)
  })
  test('delete a blog',async()=>{
    const newBlog = {
        title: "Family Man 3",
        author: "FM",
        url: "Amazon Prime"
        }
        const initialBloges = await api.get('/api/bloges')
      const addedblog=await api
      .post('/api/bloges')
      .send(newBlog)
      .expect(200)
      .expect('Content-Type', /application\/json/)
      jest.setTimeout(3000)
      await api.delete(`/api/bloges/${addedblog.body.id}`).expect(204)
      const response = await api.get('/api/bloges')
      expect(response.body.length).toBe(initialBloges.body.length)
  })

  afterAll(() => {
	mongoose.connection.close()
})