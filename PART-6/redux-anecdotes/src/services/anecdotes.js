import axios from 'axios'
import { asObject } from '../reducers/anecdoteReducer'
const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}
const createNew = async (content) => {
  const object = asObject(content)
  const response = await axios.post(baseUrl, object)
  return response.data
}
const vote=(url,anec)=>{
  axios.put(url,anec)
}

export default { getAll ,createNew , vote,}